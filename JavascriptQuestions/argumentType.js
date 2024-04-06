// Write a javascript function which accepts and argument and returns the type
"use strict";

function checkArgument(Args){
    return typeof(Args);
}

console.log(checkArgument([]));
console.log(checkArgument(1234));
console.log(checkArgument("Abcd"));