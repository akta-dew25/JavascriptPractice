
// reverse method polyfill

// const arr = null;
const arr = [1, 2, 3, 4, 5,6,7];

// const result =arr.reverse()
// console.log(result,arr);

Array.prototype.myReverse = function () {
  for (let i = this.length - 1; i >= 0; i--) {
    this.push(this[i]);
  }
  this.splice(0, this.length/2);
  return this;
};

console.log(arr.myReverse());
console.log(arr);
