"use strict";
console.log('your code goes in here!.........');
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        return console.log(phrase + result);
    }
    return console.log("You are not allowed to view the result");
}
var number1 = 24;
var number2 = 65.2;
var number3 = 5;
var printResult = true;
var phrase = "final sum is: ";
var first;
var result = add(number1, number2, printResult, phrase);
