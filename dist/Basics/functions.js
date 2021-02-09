"use strict";
//function and return types.
function add(n1, n2) {
    return n1.toString() + " " + n2.toString();
}
var combination;
combination = add;
console.log(combination(5, 89));
console.log(typeof combination);
function addHandle(n1, n2, cb) {
    cb(n1 + n1);
}
addHandle(5, 8, function (result) {
    console.log(result);
});
