let counter = 0;

const getData = () => {
  console.log("fetching data......", counter++);
};

const debounceMethod = function (fn, d) {
  let timer;

  return function () {
    let cintext = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(cintext, args);
    }, d);
  };
};

const betterFunction = debounceMethod(getData, 300);

let sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

let sum1 = a => b=> b ? sum(a+b) : a

// console.log(sum(1)(2)(3)(4)());

//debouncing = don't call first time, calls when delay between two key strokes exceeds specified delay

// throttling = function calls only when there is a delay between 2 calls exceed the specified delay
//useful to resctrict abnormal / unnecessary expensive function call.

//debouncing

function searchProduct(searchText){
  console.log(`searching for :${searchText}`);
  
}

const str = "SAMSUNG GALEXY NOTE 5 PRO";

async function wait(ms){
  return new Promise((resolve)=>setTimeout(resolve,ms))
}

//-------without debouncing

for (let i = 0; i < str.length; i++) {
  if (str[i]==" ") {
    await wait(300)
  } else {
    searchProduct(str.slice(0,i+1))
  }
}

//..........with deboucning

function debounceSearchProduct (fn,delay){
  let timer
  return function(){
 if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    clearTimeout(timer)
      return fn(...arguments)
  }, delay);
 
  }
}

const debounceSearchtext = debounceSearchProduct(searchProduct,300)

// for (let i = 0; i < str.length; i++) {
// if (str[i] == " ") {
//   await wait(300)
// } else {
//   debounceSearchtext(str.slice(0,i+1))
// }  
// }
// throtttling 


function throttler (fn,delay){
  let lastExecuted = 0
  let timeOutid
  return function(){
const now = Date.now()
  const remaining = delay -(now-lastExecuted)
  if (remaining <= 0) {
    clearTimeout(timeOutid)
    lastExecuted = now
    fn(...arguments)
  } else {
    clearTimeout(timeOutid)
    timeOutid = setTimeout(() => {
      lastExecuted = now
      fn(...arguments)
    }, remaining);
  }
  }
  
}

const throttleProductSearch = throttler(searchProduct,300)

// ----------with throttler

for (let i = 0; i < str.length; i++) {
if (str[i] == " ") {
  await wait(200)
} else {
  throttleProductSearch(str.slice(0,i+1))
}  
}
