import {onCall, onRequest} from "firebase-functions/v2/https";

// const {logger} = require("firebase-functions/v2");
import {getFirestore} from "firebase-admin/firestore";
// import {getMessaging} from "firebase-admin/messaging";
import {initializeApp} from "firebase-admin/app";
import {runButton} from "./practice";
import {NewModel} from "./blueprint/database/new/domain/entity/model/new/model";
import {
    NewFirebaseFunctionsRequestDTO
} from "./blueprint/firebase_functions/new/domain/entity/firebase_functions/new/request_dto/dto";
import {
    NewFirebaseFunctionsResponseDTO
} from "./blueprint/firebase_functions/new/domain/entity/firebase_functions/new/response_dto/dto";
import {GetUserFirebaseFunctionsRequestDTO} from "./app/_/_/domain/entity/firebase_functions/get_user/request_dto/dto";
import {
    GetUserFirebaseFunctionsResponseDTO
} from "./app/_/_/domain/entity/firebase_functions/get_user/response_dto/dto";
import {UserModel} from "./app/_/_/domain/entity/model/user/model";

// Dependencies for the addMessage function.
// const {getDatabase} = require("firebase-admin/database");
// const sanitizer = require("./sanitizer");

initializeApp();
export const firestoreDb = getFirestore();

// practice Page
export const practicePage = onRequest(async (request, response) => {
    const buttonNumber = request.query.buttonNumber;
    if (buttonNumber) await runButton(buttonNumber as string);
    const actionResponse = buttonNumber ? `<div>The Next button has been activated. ${buttonNumber}</div>` : "<div>Please click the button you want.</div>";
    const buttonsHtml = Array.from({length: 100}, (_, i) => i + 1)
        .map((num) => `<button onclick="redirectToButton(${num})">${num}</button>${num % 10 === 0 ? "<br/>" : ""}`)
        .join("");
    const htmlResponse = `<script>
          function redirectToButton(number) {
            window.location.href = '?buttonNumber=' + number;
          }
        </script><div>${actionResponse}</div><div>${buttonsHtml}</div>`;
    response.send(htmlResponse);
});


exports.New = onCall((request) => {
    console.log("run New");
    const receiveString = request.data;
    const uid = request.auth?.uid;
    const name = request.auth?.token.name || null;
    const picture = request.auth?.token.picture || null;
    const email = request.auth?.token.email || null;

    const requestNewModelDTO = NewFirebaseFunctionsRequestDTO.fromString(receiveString);

    // your code here
    const responseNewModelDTO = new NewFirebaseFunctionsResponseDTO();

    return responseNewModelDTO.toString();
});

exports.GetUser = onCall((request) => {
    console.log("run GetUser");
    const receiveString = request.data;
    const uid = request.auth?.uid;
    const name = request.auth?.token.name || null;
    const picture = request.auth?.token.picture || null;
    const email = request.auth?.token.email || null;

    const requestDTO = GetUserFirebaseFunctionsRequestDTO.fromString(receiveString);

    console.log("requestDTO", requestDTO);
    console.log(requestDTO.L000[2]);
    console.log(requestDTO.J000[1].C000.I000);
    console.log(requestDTO.J000[1].J000[1].I000);
    console.log(requestDTO.J000[1].L000);

    // your code here
    const dto = new GetUserFirebaseFunctionsResponseDTO();
    dto.I000 = 1005;
    dto.S000 = "1005";
    dto.L000 = ["apple", "banana", "cherry", "date", "elderberry"];
    dto.B000 = true;

    const userObj = new UserModel();
    userObj.I000 = 1009;
    userObj.S000 = "1009";
    userObj.L000 = ["moon", "neptune", "pluto", "saturn", "uranus"];
    userObj.B000 = false;

    const newObj = new NewModel();
    newObj.I000 = 999;

    userObj.C000 = newObj;
    userObj.J000 = [newObj, newObj, newObj, newObj, newObj];
    dto.C000 = userObj;
    dto.J000 = [userObj, userObj, userObj, userObj, userObj];

    return dto.toString();
});
