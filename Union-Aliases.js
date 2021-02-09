"use strict";
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + " " + input2.toString();
    }
    return result;
}
var combinedResult = combine(30, 56, 'as-number');
console.log(combinedResult);
var combinedNames = combine("erastus", "Elinam", 'as-text');
console.log(combinedNames);
