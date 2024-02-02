exports.ABCAA = onCall((request) => {
    const receiveString = request.data;
    const uid = request.auth?.uid;
    const name = request.auth?.token.name || null;
    const picture = request.auth?.token.picture || null;
    const email = request.auth?.token.email || null;

    const requestABCAAModelDTO = ABCAAFirebaseFunctionsRequestDTO.fromString(receiveString);

    // your code here
    const responseABCAAModelDTO = new ABCAAFirebaseFunctionsResponseDTO();

    return responseABCAAModelDTO.toString();
});