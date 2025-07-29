let counter = 0;

const getData = () => {
  console.log("fetching data......", counter++);
};

const debounceMethod = function (fn, d) {
  let timer;

  return function () {
    let cintext = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(cintext, args);
    }, d);
  };
};

const betterFunction = debounceMethod(getData, 300);

let sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

let sum1 = a => b=> b ? sum(a+b) : a

console.log(sum(1)(2)(3)(4)());
