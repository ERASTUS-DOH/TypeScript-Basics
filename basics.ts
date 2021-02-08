console.log('your code goes in here!.........');

function add(n1:number, n2:number, showResult:boolean, phrase){
    let result =  n1 + n2;
    if(showResult){
      return  console.log(phrase + result);
    }
    return console.log("You are not allowed to view the result");
}

const number1 = 24;
const number2 = 65.2;
const number3 = 5;
const printResult = true;
const phrase = "final sum is: ";
let first:string;



const result = add(number1, number2, printResult, phrase);
