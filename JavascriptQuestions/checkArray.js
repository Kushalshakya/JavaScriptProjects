// How to check if an object is an array or not?
"use strict";
function checkArray(obj){
    return Array.isArray(obj);
}
console.log(checkArray({}));
console.log(checkArray([]));