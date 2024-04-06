// Duplicate the array

"use strict";
function duplicateArray(arr){
    /** Method 1
        return arr.concat(arr);
    */

    //  Method 2
    let newArr = []
    newArr.push(arr);
    for (let i=0; i<arr.length; i++){
        newArr.push(arr[i]);
    }
    return newArr.flat();
}
console.log(duplicateArray([1,2,3,4,5]));
console.log(duplicateArray([10,53,23,63,12]));