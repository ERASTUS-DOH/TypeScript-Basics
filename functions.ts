//function and return types.
function add(n1:number , n2: number):string{
    return n1.toString() + " " + n2.toString();
}

let combination:(a:number, b:number) => string ;
combination = add;
console.log(combination(5,89));
console.log(typeof combination);

function addHandle(n1: number, n2: number, cb:(num: number) => void){
    cb(n1 + n1);
}

addHandle(5,8,(result)=>{
    console.log(result);
} );