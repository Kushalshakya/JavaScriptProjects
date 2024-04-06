// Write a program to check wheather a number is palindrome
"use strict";
function palindrome(num){
    let rev = 0, original = num;
    while(num != 0){
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }
    if(original == rev){
        return "Palindrome";
    }
    else{
        return "Not Palindrome";
    }
}
console.log(palindrome(151));
console.log(palindrome(6969));