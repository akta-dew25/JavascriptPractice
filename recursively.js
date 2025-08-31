let user = {
  name: "Ekta",
  address: {
    personal: {
      city: "Korba",
      area: "basti",
    },
    office: {
      city: "Banglore",
      area: {
        landmark: "hitech",
      },
    },
  },
};

let finalObj = {};

let magic = (obj, parent) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      magic(obj[key], parent + "_" + key);
    } else {
      finalObj[parent + "_" + key] = obj[key];
    }
  }
};
magic(user, "user");

// console.log(finalObj);

function loop(x) {
  if (x >= 10) {
    return;
  }
  loop(x + 1);
  console.log(x);
}

//  loop(0)

//recursion analogous to loop

//  let y = 0
//  while (y < 10) {
//   y++
//   // console.log(y);

//  }

function counter(maxCount = 1, currCount = 0) {
  let result = currCount
  if (currCount < maxCount) {
  const newCount =   counter(maxCount, ++currCount);
  
 result < newCount ? newCount :result
    
  }
  return result;
}

// console.log(counter(5));

function add (number){
  if (number <= 0) {
    return 0
  } else {
    return number + add(number-1)
  }
}

console.log(add(3));

// 3+ add(2)
// 2+add(1)
// 1+ add(0)

function sum(arr){
if (arr.length === 1) {
  return arr[0]
} else {
  return arr.pop()+sum(arr)
}
}

// console.log(sum([2,3,4,5]));

function factorial(x){
  if (x===0) {
    return 1
  }
  return x * factorial(x-1)
}

console.log(factorial(5));




