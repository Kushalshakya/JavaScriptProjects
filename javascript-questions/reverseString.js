// Given a string, reverse each word in the sentence

"use strict";
function reverseString(str) {
    /** Method 1
        let words = str.split("").reverse().join("");
        return words;
    **/

    // Method 2
    let words = str.split("");
    let arr = [];
    for(let i=words.length - 1; i>=0; i--){
        arr.push(words[i]);
    }
    return arr.join("");
}
console.log(reverseString("Kush"));
console.log(reverseString("abcd"));