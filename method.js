const arr = [5,1,3,2,6]

function double(x){
    return x *2
}

function triple(y){
    return y*3
}

function binary(x){
    return x.toString(2)
}

const output = arr.map(double)
const output1 = arr.map(triple)
const output2 = arr.map(binary)

// console.log(output,output1,output2);

function findSum(arr){
  let sum = 0

  for(i = 0; i< arr.length ; i++){
    sum  = sum + arr[i]
  }
  return sum
}

// console.log(findSum(arr));

// reduce function

const output3 = arr.reduce((acc,curr)=> acc = acc + curr,0)

// console.log(output3);

// find maximum value

function findMax(arr){
let max = 0
for (let i = 0; i < arr.length; i++) {
       if (arr[i]>max) {
        max = arr[i]
       }    
}
return max
}

// console.log(findMax(arr));

const output4 = arr.reduce((acc,curr)=> {
    if (curr > acc) {
        acc = curr
    }
    return acc
},0)

// console.log(output4);

const users = [
    {firstName : "Ekta",lastName :"Dew",age:20},
    {firstName :"pooja",lastName:"dew2",age:23},
    {firstName:"kiran",lastName:"poojari",age:25},
    {firstName:"nitya",lastName:"sahu",age:20}

]

const output5 = users.map((x)=> x?.firstName + " "+ x?.lastName)
// console.log(output5);

// find {20:2,23:1,25:1}

const output6 = users.reduce((acc,curr)=>{
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]
    }else{
     acc[curr.age]=1
    }
    return acc
},{})

console.log(output6);
 
// find firstname whos the age is greater than 20

const output7 = users.filter((x)=>x.age > 20).map((x)=>x.firstName
)

console.log(output7);

const output8 = users.reduce((acc,curr)=>{
    if (curr.age>20) {
        acc.push(curr.firstName)
    }
    return acc
},[])

console.log(output8);






