// string to uppercase

const str = "aHello 123 world %!";

function stringUpperCase(str) {
  let charCode;
  let textUppercase = "";
  for (let i = 0; i < str.length; i++) {
    charCode = str[i].charCodeAt();
    let alphabet = String.fromCharCode(charCode);
    if (charCode >= 97 && charCode <= 122) {
      textUppercase += String.fromCharCode(charCode - 32);
    } else {
      textUppercase += alphabet;
    }
  }
  return textUppercase;
}

// console.log(stringUpperCase(str));

// string to lowercase

const str1 = "aHELLO 123 WORLD ^%";

function stringLowerCase(str1) {
  let charCode;
  let textLowercase = "";
  for (let i = 0; i < str1.length; i++) {
    charCode = str1[i].charCodeAt();
    let alphabet = String.fromCharCode(charCode);
    if (charCode >= 65 && charCode <= 90) {
      textLowercase += String.fromCharCode(charCode + 32);
    } else {
      textLowercase += alphabet;
    }
  }
  return textLowercase;
}

// console.log(stringLowerCase(str1));

// Capitalize first letter of each word

const str2 = "hello world ekta dew";
const arrStr = str2.split(" ");
console.log(arrStr);


function capitalizeFirstLetter(str) {
  let text = "";
  for (let i = 0; i < str.length; i++) {
    let capitalfrstltr = str[i][0].toUpperCase();
    let word = capitalfrstltr + str[i].slice(1, str[i].length);
    text += word + " ";
  }
  return text;
}

// console.log(capitalizeFirstLetter(arrStr));

// Remove Whitespace: Write a function to remove all whitespace from a given string.

function removeWhiteSpace(str) {
    let text = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
           text += str[i]  
        } 
    }
    return text
}
// 

// console.log(removeWhiteSpace(str2));


// Replace Substring: Write a function to replace all occurrences of a substring in a given string with another substring.

const str3 = "she is good in maths,but she is absent that day so she failed"
const arrStr3 = str3.split(" ")

// console.log(str3.replaceAll("she","he"));

function replaceWord(originalStr,replaceStr) {
    let text = ""
    for (let i = 0; i < arrStr3.length; i++) {        
        if (arrStr3[i] === originalStr) {
            text += arrStr3[i]
            
        }
    }
    return text
}

console.log(replaceWord("she","he"));





