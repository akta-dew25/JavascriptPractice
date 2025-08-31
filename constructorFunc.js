function Person(name, age, gender) {
  (this.name = name), (this.age = age), (this.gender = gender);
}

const person1 = new Person("ekta", "30", "female");

// console.log(person1);

// before es6 version  using constructor function

function Student(name, rollNum, grade, section) {
  (this.name = name),
    (this.rollNum = rollNum),
    (this.grade = grade),
    (this.section = section);
}

Student.prototype.getDetails = function () {
  return `Name:${this.name} , Roll:${this.rollNum}, grade:${this.grade}, section : ${this.section}`;
};

let student1 = new Student("ekta", "23", "2345", "a");

// console.log(student1.getDetails());

// ES6 version classs

class Student3 {
  constructor(name, rollNum, grade, section) {
    (this.name = name),
      (this.rollNum = rollNum),
      (this.grade = grade),
      (this.section = section);
  }


getDetails(){
    return `Name : ${this.name}, rollnum : ${this.rollNum}, Grade :${this.grade}, section :${this.section}`
}
}

let student2 = new Student("ekta","23","345444","A")

// console.log(student2.getDetails());

