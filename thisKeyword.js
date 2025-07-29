// this is global space

console.log(this);//global object - window global

// this inside a function

function x (){
    // the value depends on strict mode and non strict mode
    console.log(this);
    
}

// in strict mode  - inside a function this keyword - undefined or null

// this inside  non strict mode - (this substitution)

// this keyword will be replaced with global object only in non strict mode

// this keyword value  depends on  how the function is called - (window)

x() - //undefined - using strict mode
window.x() // window object

// this inside a object's method

const obj = {
    a:10,
    x:function(){
        console.log(this);
        console.log(this.a);
        
        
    }
}

obj.x()

// call apply  bind method (sharing method)

// call method

const student = {
    name :"ekta",
    printName : function(){
        console.log(this.name);
        
    }
}

student.printName() // ekta

const student2 = {
    name :"dewangan"
}

student.printName.call(student2) // dewangan.   value of this student2

// this inside arrow function -- arrow function does not have their own this - the this value of the enclosing lexical context - is that global         

const obj1 = {
    a:10,
   x:()=>{
    console.log(this);
    
   }
}

obj1.x() // window object 

// this inside nested arrow function

const obj2 = {
    a:10,
    x:function (){
        // enclosing lexical context
        const y = ()=>{
            console.log(this);
            
        }
        y()
    }
}

obj2.x() // obj2 = {a:10,x:f}

// this inside DOM - reference to HTML element



