let name = {
    firstname : "ekta",
    lastname :"Dew",
    printName:function(hometown,state){
        console.log(this.firstname+" "+ this.lastname + "from"+hometown +" "+ state);
        
    }
}

// name.printName("delhi")

let name2 = {
    firstname :"Sachin",
    lastname :"tendulkar"
}

// function borrowing

// name.printName.call(name2,"mumbai","maharasthra")
// name.printName.apply(name2,["delhi","delhi"])

// bind method - it is return function and it gives the copy which can be invoke later

// let printName2=name.printName.bind(name2,"maharastha","shshs")
// 
// console.log(printName2);
// printName2()


// polyfill for bind method

let student = {
    firstname : "pooja",
    lastname :"dew"
}

let printName3 = function(other,other2){
    console.log(this.firstname + " " + this.lastname+" "+ other+" "+other2);
    // 
}

Function.prototype.myBind = function(...arg){
    console.log(arg,"arggg");
    
    const obj = this   
    params = arg.slice(1)     
  return function(...arg2){
    obj.apply(arg[0],[...params,...arg2])
  }
}

// let printBindMthod = printName3.myBind(student,"testing")
// printBindMthod("testing2")


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

// greeting.apply(["hello","testing"])


// bind method

// bind method create the new function that, when called ,has a specified this value and optionally pretends arguments to the function ,unlike call and apply , it doesn't invoke the function immedialtely ,instead it returns a new function with specified this context bound.

function greeting2 (arg1,arg2){
    console.log(`${arg1},${this.name}${arg2}`);
    
}

const persn2 = {name :"ektaaa"}

const boundGreet = greeting2.bind(persn2,"hello")

// boundGreet("!")

// Note = dont use arrow function for prototype function becoz "this" not available inside the arrow function

