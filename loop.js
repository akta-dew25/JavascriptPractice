let a = 0;
let n = 0;
while (a < 5) {
  a++;
  if (a === 3) {
    continue;
  }
  n += a;
//   console.log(n);
}
// Logs:
// 1 3 7 12

let i = 0;
let j = 10;
checkIandJ: while (i < 4) {
  console.log(i); // 2
  i += 1; // 3
  checkJ: while (j > 4) {
    console.log(j); // 8
    j -= 1; // 7
    if (j % 2 === 0) {
      continue;
    }
    console.log(j, "is odd."); // 7
  }
  console.log("i =", i); //2
  console.log("j =", j); ///8
}
