// what is the callback function in js

function attachEventListner(){
    let count = 0
document.getElementById("clickMe").
addEventListener("click",function xyz(){
console.log("button clicked", ++count);

})
}

// attachEventListner()

// callback function

function dividedByTwo(sum){
    console.log(sum/2);
    
}

function multiplyByTwo(sum){
console.log(sum*2);

}

function operationOnSum(num1,num2,operation
    
){
let sum = num1+num2
operation(sum)
}

operationOnSum(3,3,dividedByTwo)

operationOnSum(3,3,multiplyByTwo)
