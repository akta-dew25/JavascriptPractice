// shadowing

var a = 10;
let b = 200;
const c = 300;
{
  var a = 100;
  let b = 20;
  const c = 30;
  //     console.log(a); 100
  // console.log(b) 20
  // console.log(c); 30
}
// console.log(a); 100
// console.log(b); 200
// console.log(c); 300

// closure = definition in mdn

function x() {
  var d = 20;
  function y() {
    console.log(d);
  }
  return y;
}

var z = x();

// console.log(z);
// z()

function outest(){
var f = 20
function outer (b){
  function inner(){
    console.log(g , f,b);
    
  }
    let g = 10

  return inner
}
return outer
}

// let g = 100

var close = outest()("hello")

close()

// setTimeout and closure examples

function x() {
  var i = 10;
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// x()

function y() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
// y().   6,6,6,6,6

function y() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

// y()  1,2,3,4,5
// for let its creates a new copy every time this loop is executed
// for var copy of i refers to the same memory location in each and every step = avoid the same value for var we can use closure

function y() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
}
y()


function Counter (){
var count = 0

this.incremetCounter = function(){
  count++
  console.log(count);
  
}
this.decrementCounter = function (){
  count--
  console.log(count);
  
}
}

var counter1 = new Counter()

counter1.incremetCounter()
counter1.decrementCounter()