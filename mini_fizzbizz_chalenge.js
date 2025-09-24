const prompt = require('prompt-sync')({ sigint: true });


let number = Number(prompt("Entre a number: "));

switch(true){
    case number%3==0:
        console.log("Fizz");
        break;
    case number%5==0:
        console.log("Buzz");
        break;
    case number%5==0 && number%3==0:
        console.log("FizzBuzz");
        break;
    default:
        console.log(number);

}
