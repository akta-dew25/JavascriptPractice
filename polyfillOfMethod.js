const array = [1,2,3,5,6,7,10]

// console.log(array.map((value,index,arr)=> value*2));

// polyfill for map method -----------------

Array.prototype.myMap = function(cbfn){
    let result = []
    for (let i = 0; i < this.length; i++) {
        const ele = this[i];
        result.push(cbfn(ele,i,this))
        
    }
    return result
}

// console.log(array.myMap((value,i,arr)=> value*200));

// polyfill for filter method -------

// console.log(array.filter((value,idx,arr)=> value%2 == 0));

Array.prototype.myFilter = function(cbfn){
    let result = []
     for (let i = 0; i < this.length; i++) {
        const ele = this[i];
        if (cbfn(ele,i,this)) {
            result.push(this[i])
        }
        
     }
    return result
}

// console.log(array.myFilter((val)=> val%2 == 0));

// polyfill for reduce method ------

// console.log(array.reduce((acc,curr,i,arr)=>  acc+curr,0));

Array.prototype.myReduce= function(cbfn,init){
    let result = init
    for (let i = 0; i < this.length; i++) {
        const ele = this[i];                
      result =   cbfn(result,ele,i,this)
        
    }
    
    return result
}
// console.log(array.myReduce((res,curr)=> res+curr,0));


const grpOddEven = array.myReduce((acc,curr)=>{
   
    if (curr %2 == 0) {
        acc.even.push(curr)
    } else {
        acc.odd.push(curr)
    }
    return acc
},{odd:[],even:[]})

// console.log({grpOddEven});


// repeat polyfill of method

// console.log(array.reduce((res,curr,idx,arr)=>res+curr,0));

// Array.prototype.myReduceNew = function(cbfn,init){
//    let result = init
//    for (let i = 0; i < this.length; i++) {
//     const ele = this[i];
//     result = cbfn(result,ele,i,this)
    
//    }
//    return result
// }

// console.log(array.myReduceNew((res,curr)=>res+curr,0));


// polyfill for flat method

let arr = [1, 2, [3, [4, [5]]]];

// console.log(arr.flat(3));

Array.prototype.myFlat = function(level=1){
    let result = []
    let currArray = this
    if (level == Infinity) level = 999
    for (let currLevel = 0; currLevel < level; currLevel++) {
      result = []
      for (const ele of currArray) {
        if (Array.isArray(ele)) {
            result = [...result,...ele]
        } else {
            result.push(ele)
        }
        currArray = result
      }        
    }
    return result
        
    
}

// console.log(arr.myFlat(99));

Array.prototype.myFlat2 = function(level = 1){
    function flatMe(arr,maxLevel ,currentLevel = 1,result=[]){
        for (const ele of arr) {
            if (Array.isArray(ele) && currentLevel <= maxLevel) {
                flatMe(ele,maxLevel,currentLevel+1,result)
            } else {
                result.push(ele)
            }
        }
        return result
    }
    return flatMe(this,level)
}

// console.log(arr.myFlat2(Infinity));



// polyfill for foreach method
const copy = []

// console.log(array.forEach((val)=> {
//     copy.push(val*2)
// }
// ));
// console.log(copy);

Array.prototype.myForEach = function (cb){
    for (let i = 0; i < this.length; i++) {
        const ele = this[i];
        cb(ele,i,this)
        
    }
}

array.myForEach((val)=> copy.push(val*3))

console.log(copy);














