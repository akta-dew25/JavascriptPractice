// const api = "https://jsonplaceholder.typicode.com/todos/1"

// const users = fetch(api) // fetch return as a promise

// console.log(users);

// users.then(function(data){
//     console.log(data);

// })

const cart = ["shoes", "pants", "kurtas"];

// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId, function (paymentInfo) {
//     showOrderSummary(paymentInfo, function () {
//       updateWalletBalance();
//     });
//   }); //
// }); //orderId

// {data:orderDetails}

// createOrder(cart)
//   .then(function (orderId) {
//    return proceedToPayment(orderId); // here we are attach callback function to promise object
//   })
//   .then(function (paymentInfo) {
//     return showOrderSummary(paymentInfo);
//   })
//   .then(function (paymentInfo) {
//    return updateWalletBalance(paymentInfo);
//   });

// promise has three states - pending, fullfilled and rejected

// creating own promises

const cart2 = ["dress", "pants", "toys"];

const promise = createOrder2(cart);

// promise.then(function(orderId){
//     console.log(orderId);
//     return orderId
// })
// .catch(function(err){
//     console.log(err.message) // you are attaching the failure call back function using  a catch to our promise object

// })
// .then(function(orderId){
//    return proceedToPayment(orderId)
// })
// .then(function(paymentInfo){
//     console.log(paymentInfo);

// })

function validateCart(cart2) {
  return true;
}

function createOrder2(cart2) {
  const pr = new Promise(function (resolve, reject) {
    // createorder
    // validateCart
    // orderId
    if (!validateCart(cart2)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "12345";

    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function proceedToPayment() {
  return new Promise(function (resolve, reject) {
    resolve("payment successfully");
  });
}

//   Promise APIS

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 success");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 success");
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 success");
  }, 2000);
});
// Promise.all([p1, p2, p3]).then((res) => {
//   console.log(res);
// });
// output =['P1 success', 'P2 success', 'P3 success']

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 success");
  }, 3000);
});
const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P2 rject");
  }, 1000);
});
const p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 success");
  }, 2000);
});
// Promise.all([p4, p5, p6])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));
// // output =P2 reject

// Promise.allSettled([p4, p5, p6])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//   output = [
//     {
//         "status": "fulfilled",
//         "value": "P1 success"
//     },
//     {
//         "status": "rejected",
//         "reason": "P2 rject"
//     },
//     {
//         "status": "fulfilled",
//         "value": "P3 success"
//     }
// ]

// Promise.race([p4, p5, p6])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// output = P2 reject

// Promise.any([p4, p5, p6])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// // ouput = P3 success
  

// Promise.any([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

//   output = P2 success
//   settled can be a success or reject

const p7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P1 reject");
  }, 3000);
});
const p8 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P2 rject");
  }, 1000);
});
const p9 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P3 reject");
  }, 2000);
});

// Promise.any([p7, p8, p9])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err.errors));

// output = AggregateError: All promises were rejected
// [
//     "P1 reject",
//     "P2 rject",
//     "P3 reject"
// ]


//  promise created

function sumOfAllThree(...args){
 return new Promise((resolve,reject)=>{
  if (args.length > 3) {
    reject("rejected")
  } else {
    let sumOfArg =0
    let i = 0
    while(i < args.length){
 sumOfArg += args[i]
    i++
    }
     resolve ("sum ::", +sumOfArg
     )
  }
  
 })
}

sumOfAllThree(8,9,9).then(result =>console.log(result)
).catch(error=>console.log(error)
)

