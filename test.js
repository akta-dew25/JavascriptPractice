const arr = [1,2,3,4,5,6]

const newArr = arr.map((item)=>item*2)
// console.log(newArr);

// console.log(arr.reduce((acc,curr,i,arr)=>acc+curr,0));

Array.prototype.myReduce= function (cbfn,init) {
    let result = init
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        result = cbfn(result,element,i,this)
    }
    return result
}

// console.log(arr.myReduce((acc,curr)=>acc+curr,0));

