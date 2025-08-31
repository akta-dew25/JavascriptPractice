// shallow copy - A shallow copy occurs when you copy the reference of an object to a new variable. 
// In this process, only the top-level properties are copied, while nested objects or arrays still reference the original memory location. 
// This means that if you change the nested properties in one object, those changes will reflect in the other because they share the same memory reference.


const employee = {
    name : "ekta",
    id :123,
    salary : 12000,
    grade : "a"
}

const newEmployee = employee

// console.log({employee},{newEmployee});

// after modification

newEmployee.name = "pooja"
newEmployee.id = 124

console.log({employee},{newEmployee});

// Deep Copy -A deep copy, on the other hand, creates a completely independent copy of the object, 
// including all nested objects or arrays. This ensures that changes made to one object do not affect the other.
//  Each object is stored in a separate memory location, making them entirely independent.

const personDetail= {
    name : "pooja",
    roll : 1234,
    grade : "A"
}

const newPerson = JSON.parse(JSON.stringify(personDetail))

// console.log({personDetail},{newPerson});

newPerson.name = "ekta"
newPerson.roll = 345

// console.log({personDetail},{newPerson});


