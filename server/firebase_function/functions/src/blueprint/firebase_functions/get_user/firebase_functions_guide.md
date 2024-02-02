exports.GetUser = onCall((request) => {
    const receiveString = request.data;
    const uid = request.auth?.uid;
    const name = request.auth?.token.name || null;
    const picture = request.auth?.token.picture || null;
    const email = request.auth?.token.email || null;

    const requestDTO = GetUserFirebaseFunctionsRequestDTO.fromString(receiveString);

    // your code here
    const responseDTO = new GetUserFirebaseFunctionsResponseDTO();

    return responseDTO.toString();
});