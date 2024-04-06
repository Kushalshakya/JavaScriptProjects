// Write a javascript functin that accepts a string as a parameter and converts the first letter of each word of the string in uppercase
function strUppercase(str){
    let words = str.split(" ");
    let final = "";
    for(let i=0; i<words.length; i++){
        let capitalized = words[i].charAt(0).toUpperCase();
        final += capitalized + words[i].slice(1) + " ";
    }
    return final;
}
console.log(strUppercase("this is the text i want to uppercase the first letter"));