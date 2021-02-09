"use strict";
//objects
// const person
//  = {
//     name:"erastus",
//     age:24,
//     hobbies:[
//         'sports',
//         'cooking'
//     ],
//     role: [2,'author ']
// }
//tupples
// const person:{
//     name:string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name:"erastus",
//     age:24,
//     hobbies:[
//         'sports',
//         'cooking'
//     ],
//     role: [2,'author ']
// }
//Enum
var Months;
(function (Months) {
    Months[Months["Jan"] = 0] = "Jan";
    Months[Months["February"] = 1] = "February";
    Months[Months["March"] = 2] = "March";
    Months[Months["April"] = 3] = "April";
    Months[Months["May"] = 4] = "May";
    Months[Months["June"] = 5] = "June";
    Months[Months["July"] = 6] = "July";
    Months[Months["August"] = 7] = "August";
    Months[Months["September"] = 8] = "September";
    Months[Months["October"] = 9] = "October";
    Months[Months["November"] = 10] = "November";
    Months[Months["December"] = 11] = "December";
})(Months || (Months = {}));
var person = {
    name: "erastus",
    age: 24,
    hobbies: [
        'sports',
        'cooking'
    ],
    role: [2, 'author '],
    month_born: Months.May
};
//arrays. 
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hoby = _a[_i];
    console.log(hoby);
}
console.log("I was born in the month of " + person.month_born);
