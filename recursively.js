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

console.log(finalObj);


function loop(x){
  if (x>=10) {
    return
  }
  loop(x+1)
  console.log(x);
  
}

 loop(0)

 //recursion analogous to loop

 let y = 0
 while (y < 10) {
  y++
  console.log(y);
  
 }

 
