let userInput:unknown;
let userName:string;

userInput = 5;
userInput = 'Erastus';

if(typeof userInput === 'string'){
    userName = userInput;
}

function generateError(message:string, code:number = 401){
    throw {
        message: message,
        code: code
    }
}

generateError('An error occured while accessing resources',500);