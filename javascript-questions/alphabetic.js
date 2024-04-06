// Write a javascript function that returns a passed string with letters in alphabetical order
"use strict";
function alphabetical(str){
    return str.split("").sort().join("");    
}

console.log(alphabetical("apple"));