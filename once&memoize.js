// / once  = once fucntion in javascript is a utility function that ensures a given function is executed only once time no matter how many times its called.

// function once(fn) {
//   let called = false;
//   let result;
//   return function (name) {
//     if (!called) {
//       result = fn(name);
//       called = true;
//       return result;
//     } else {
//       return result;
//     }
//   };
// }

function once(fn) {
  let isCalled = false;
  let result;
  return function () {
    if (!isCalled) {
      result = fn(...arguments);
      isCalled = true;
      return result;
    } else {
      return result;
    }
  };
}

function greet(name) {
  return `Hi ${name}`;
}

const greetOnce = once(greet);

// console.log(greetOnce("Ekta"));
// console.log(greetOnce("Kiran"));
// console.log(greetOnce("Nitya"));

// Memoize = when a function is called with the same arguments multiple times it returns the cache result intead of reexecuting the potentially expensive computation.

async function processing(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


function memoize (fn){
  let cache = {}  
  return async function (){
    const key = JSON.stringify(...arguments)
    
    if (cache[key]) {
      return cache[key]
    } else {
      let result = await fn(...arguments)
      cache[key] = result
      return result
    }
  }
}

async function getUserData(uid){
console.log("processing------------");
await processing(2000)
return {uid}

}

const memoizeGetUserdata= memoize(getUserData)

async function global(){
  console.log(await memoizeGetUserdata("123"));
  console.log(await memoizeGetUserdata("123"));
  console.log(await memoizeGetUserdata("123"));
  console.log(await memoizeGetUserdata("124"));
  console.log(await memoizeGetUserdata("124"));
  console.log(await memoizeGetUserdata("124"));
  
}

global()
