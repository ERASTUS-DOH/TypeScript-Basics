"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'Erastus';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    if (code === void 0) { code = 401; }
    throw {
        message: message,
        code: code
    };
}
generateError('An error occured while accessing resources', 500);
