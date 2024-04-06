// How to check wheather a number is integer or not?

"use strict";
function checkInteger(int){
    return int % 1 == 0 ? true : false;
}
console.log(checkInteger(1234));
console.log(checkInteger(1234.324));