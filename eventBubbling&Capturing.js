document.querySelector("#grandparent").addEventListener("click",()=>{
    console.log("grand parent clicked");
    
},true) // capturing

document.querySelector("#parent").addEventListener("click",()=>{
    console.log("parent clicked");
    
},false) // bubbling

document.querySelector("#child").addEventListener("click",()=>{
    console.log("child clicked");
    
},true) // capturing

// if we want stop event bubbling and capturing then we need to use stopPropagation.

