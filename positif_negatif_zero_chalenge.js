const prompt = require('prompt-sync')({ sigint: true });


let number = prompt("Entre a random number: ");
if(number==0){
    console.log("Nul");
}else if(number<0){
    console.log("Negatif");
}else{
    console.log("Positif"); 
}