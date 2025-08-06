// const userData = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve({
//             name:"ekta",age:"30"
//         })
//     }, 2000);
// })

function MyPromise(cbfn) {
  let value;
  let error;
  let resolved = false;
  let rejected = false;
  let onResolve;
  let onReject;
  let called = false;
  let onFinally;

  //async------
  function resolve(val) {
    value = val;
    resolved = true;
    if (typeof onResolve == "function" && !called) {
      called = true;
      onResolve(value);
      if (typeof onFinally == "function") onFinally();
    }
  }
  function reject(err) {
    error = err;
    rejected = true;
    if (typeof onReject == "function" && !called) {
      called = true;
      onReject(error);
      if (typeof onFinally == "function") onFinally();
    }
  }

  //sync-------
  this.then = function (thenFn) {
    onResolve = thenFn;
    if (resolved && !called) {
      called = true;
      onResolve(value);
    }
    return this;
  };
  this.catch = function (catchFn) {
    onReject = catchFn;
    if (rejected && !called) {
      called = true;
      onReject(error);
    }
    return this;
  };
  this.finally = function (finallyFn) {
    onFinally = finallyFn;
    if (called) {
      onFinally(value);
    }
    return this
  };
  cbfn(resolve, reject);
  return this
}

const userData = MyPromise((resolve, reject) => {
    setTimeout(() => {
  resolve({
    name: "ekta",
    age: "30",
  });
  // reject(500)
    }, 2000);
});

userData
  .then((data) => console.log({ data }))
  .catch((err) => console.log({ err }))
  .finally(() => console.log("finally"));
