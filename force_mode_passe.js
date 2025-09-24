
const prompt = require('prompt-sync')({ sigint: true });

let password = prompt('Entre password');

const numbers = password.match(/\d+(\.\d+)?/g);

const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

const isContainsSpecialCharacters = specialCharacters.test();

const convertArrayToString = numbers.toString();

const stringLength = convertArrayToString.length;

if(password.length<6){
    console.log("Weak");
}else if(password.length>=6 && stringLength==1){
     console.log("Medium");
}else if(password.length>=8 && stringLength== 1 && isContainsSpecialCharacters ){
    console.log("Strong");
}