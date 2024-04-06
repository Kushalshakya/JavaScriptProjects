// Write a javascript function to get the number of occurences of each letter in specified string
"use strict";
function occurences(elem){
    let obj = {};
    elem.split("").forEach((elems) => {
        if(obj.hasOwnProperty(elems) === false){
            obj[elems] = 1;
        }
        else{
            obj[elems]++;
        }
    })
    return obj;
}
console.log(occurences("apple"));