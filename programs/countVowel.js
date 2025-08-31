// Count Vowels and Consonants: Write a function to count the number of vowels and consonants in a given string 
// small letter - 

const str = "Hello World, Javascript";
// const str = "aeiou wtghs" 

function countVowelCons(str) {
  let vowel=0;
  let cons =0;
  

      for (let i = 0; i < str.length; i++) {
        let currChar = str[i].toLowerCase()
        let currCharCode = currChar.charCodeAt()
           if (["a","i","o","e","u"].includes(currChar)) {
                   ++vowel
           } else if (currCharCode >= 97 && currCharCode <=122) {            
                ++cons
           } 

  }

  return {"vowel":vowel,"conso":cons}
}


console.log(countVowelCons(str));




