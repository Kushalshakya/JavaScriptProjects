// Write a javascript function that reverse a number
"use strict";
function reverseNumber(num){
    let rev = 0;
    while(num > 0){
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }
    return rev;
}
console.log(reverseNumber(12345))
console.log(reverseNumber(69696969))