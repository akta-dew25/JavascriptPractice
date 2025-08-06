function counter(){
    let count = 0

    return function(){
        ++count
        return count
    }
}

const counter1  = counter()
// console.log( counter1());
// console.log(counter1());

const counter2 = counter()
// console.log(counter2());

function myClosure (){
    var a = 10

    return function(){
        console.log("aaaa",a);
        
    }
}

const closure1 = myClosure()
closure1()


