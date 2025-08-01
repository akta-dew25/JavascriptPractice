

// Explanation call apply bind method

// call method 
// call method invokes a function immediately with a specified this value and arguments

// functionName.call(thisArg,arg1,arg2)
// example

function greet (greeting,argument){
    console.log(`${greeting},${this.name}${argument}`);
    
}

const person = {name :"ekta"}

// greet.call(person,"hello","!")


// Apply method

// apply method is similar to call(),but instead of passing arguments individually , you pass them as an array

// example

function greeting (argument1,argument2){
    console.log(`${argument1},${this.name},${argument2}`);
    
}

const persn = {name:"puja"}

// greeting.apply(persn,["hello","testing"])


// bind method

// bind method create the new function that, when called ,has a specified this value and optionally pretends arguments to the function ,unlike call and apply , it doesn't invoke the function immedialtely ,instead it returns a new function with specified this context bound.

function greeting2 (arg1,arg2){
    console.log(`${arg1},${this.name}${arg2}`);
    
}

const persn2 = {name :"ektaaa"}

const boundGreet = greeting2.bind(persn2,"hello")

// boundGreet("!")

// Note = dont use arrow function for prototype function becoz "this" not available inside the arrow function


// Polyfill for all method
// call method - immidiat calling

const personDetail = {
    name :"Ekta",
    age:30
    
}

function getPersonDetails(uid,id) {
  console.log("Sl. No.   :", uid);
  console.log("uid.  :", id);
  console.log("Full Name :", this.name);
  console.log("Age       :", this.age);
}

// getPersonDetails.call(personDetail,'1')
Function.prototype.myCall = function(customThis={},...args){

    if (typeof this !== "function") {
        throw new Error(`${this} is not a fucntion`)
    }
    if (customThis === null || typeof customThis !== "object"|| Array.isArray(customThis)) {
        customThis = {}
    }
    customThis.fn = this
    customThis.fn(...args)

}

// getPersonDetails.myCall(personDetail,"1")

// apply method

Function.prototype.myApply = function(customThis={},args=[]){

    if (typeof this !== "function") {
        throw new Error(`${this} is not a fucntion`)
    }
    if (customThis === null || typeof customThis !== "object"|| Array.isArray(customThis)) {
        customThis = {}
    }
    if (!Array.isArray(args)) {
        args =[]
    }
    customThis.fn = this
    customThis.fn(...args)

}

// getPersonDetails.myApply(personDetail,[1,2])

// bind method

Function.prototype.myBind = function(customThis={},...args){
if (typeof this !== "function") {
        throw new Error(`${this} is not a fucntion`)
    }
    if (customThis === null || typeof customThis !== "object"|| Array.isArray(customThis)) {
        customThis = {}
    }
    if (!Array.isArray(args)) {
        args =[]
    }
    customThis.fn = this
    return function(){
   return customThis.fn(...args,...arguments)

    }
}

const bindedFn = getPersonDetails.myBind(personDetail,"1")
bindedFn("2")
