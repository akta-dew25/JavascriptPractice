// async function always return a promise
// that getData will always return a promise from itself

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved value");
  }, 10000);
});

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved value");
  }, 5000);
});

// async function getData(){
// return p
// }

// const dataPromise = getData()

// dataPromise.then((res)=>console.log(res))

// async/await is used to handle promise

function getData() {
  // js engine will not wait for promise to be resolved
  p.then((res) => console.log(res));
  console.log("namaste javascript");
}

getData(); // output= namaste javascript then after 10 second promise will print result = promise resolved value

// await can be used only inside an async function

async function handlePromise() {
  console.log("hello world");

  //when we use async await js engine will wait for promise to be resolved
  const val = await p;
  console.log("testing");

  console.log(val);

  const val2 = await p;
  console.log("testing2");
  console.log(val2);
}
// output = hellowworld after 10second all log will print

// handlePromise();

async function handlePromise2() {
  console.log("hello world");

  //when we use async await js engine will wait for promise to be resolved
  const val = await p;
  console.log("testing");

  console.log(val);

  const val2 = await p1;
  console.log("testing2");
  console.log(val2);
}
// output is same like above function
// handlePromise2()

async function handlePromise3() {
  console.log("hello world");

  //when we use async await js engine will wait for promise to be resolved
  const val = await p1;
  console.log("testing");

  console.log(val);

  const val2 = await p;
  console.log("testing2");
  console.log(val2);
}
// output = hellowworld after 5second pi will print then after 5 second  p will print - total time will take 10second

// handlePromise3()

const API_URL = "https://api.github.com/users/akta-dew25";

async function newHandlePromise() {
  try {
    const data = await fetch(API_URL);
    //   when is resolve it gives response object = response.json()= jsonvalue
    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (err) {
    console.log(err);
  }
}

newHandlePromise();
