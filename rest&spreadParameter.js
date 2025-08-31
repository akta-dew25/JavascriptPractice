// rest parameter

function extractNumber(...arg){
    return arg[1]
}

// console.log(extractNumber(8,9,1));

function addAllArgs(...args){
    let sumOfArg = 0
    let i = 0

    while (i < args.length) {
        sumOfArg += args[i]
        i++
    }
    return sumOfArg
}

// console.log(addAllArgs(6,5,7,99));

// Spread operator

function addAllNumbers(num1,num2,num3) {
    return num1+num2+num3
}

let threeNumbers= [3,4,5]

// console.log(addAllNumbers(...threeNumbers));

let array1 = [3,4,5,6]
let array2 = [...array1]
// console.log(array2);

let obj1 = {x:'Hello', y:'Bye'};
let obj2 = {z:'Yes', a:'No'};
let mergedObj = {...obj1,...obj2}
// console.log(mergedObj);



