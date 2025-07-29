var n 
// console.log(n);

var x = 7

function getName(){
    console.log("Namaste JS")
}

// getName()

// console.log(x)

var y =  1

// a()
// b()
// console.log(y);


function a(){
    var y = 10
    console.log(y);
    
}

function b(){
    var y = 100
    console.log(y);
    
}

// lexical scope chain

function d(){
    var e =10
    console.log(e)
    c()
    function c(){
        console.log(e)
    }
}

// console.log(e)
d()

console.log(t)

let t = 1000
