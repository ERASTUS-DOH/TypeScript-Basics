
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
enum Months {
    Jan,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

const person = {
    name:"erastus",
    age:24,
    hobbies:[
        'sports',
        'cooking'
    ],
    role: [2,'author '],
    month_born:Months.May
}

//arrays. 

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);
for(const hoby of person.hobbies){
    console.log(hoby);
}
console.log("I was born in the month of "+person.month_born);