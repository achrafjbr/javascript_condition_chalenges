const prompt = require('prompt-sync')({ sigint: true });

let firstNumber = Number(prompt("Entre first number: "));

let secondNumber = Number(prompt("Entre second number: "));

if(firstNumber>secondNumber){
    console.log(firstNumber);   
}else{
      console.log(secondNumber);
}