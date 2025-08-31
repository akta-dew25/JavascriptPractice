
// before ES6 version

const classDetails = {
    strength: 78,
  benches: 39,
  blackBoard:1
}

const classStength = classDetails.strength
const classBenches = classDetails.benches
const classBlackboard = classDetails.blackBoard

// console.log(classBenches);

// using ES6 version

const {strength : classStength1,benches : classBenches1, blackBoard : classBlackboard1} = classDetails

// console.log(classBenches1);

// before ES6 version

const arr = [5,6,7,8]

const first = arr[0]
const second = arr[1]
const third = arr[2]
const fourth = arr[3]
// console.log(fourth);

const [frst,scnd,thrd,four] = arr
// console.log(frst);






