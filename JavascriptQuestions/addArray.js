// Loop an array and add all members of it in an array of numbers and strings, only add those members which are not string
"use strict";
function addArray(arr){
    let num = 0;
    for(let i=0; i<arr.length; i++){
        if(typeof(arr[i]) === "string" && !isNaN(arr[i])){
            continue;
        }
        else{
            num += arr[i];
        }
    }
    return num;
}
console.log(addArray([1,2,3,"2",4,5,6,7,"1"]));
console.log(addArray(["2",1,"4","1",6,6]));