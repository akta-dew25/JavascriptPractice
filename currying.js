
// Currying 
let multiply = function(x,y){
    console.log(x*y);
    
}

let multiplybyTwo = multiply.bind(this,2)

multiplybyTwo(5)

let multiply1 = function(x){
    return function(y){
        return function (z){
        console.log(x*y*z);
        }
    }
}

// let multiplyByThree = multiply1(2)
// let multiplyByfour = multiplyByThree(3)
// multiplyByfour(4)

multiply1(2)(3)(4)