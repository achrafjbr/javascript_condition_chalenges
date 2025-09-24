const prompt = require('prompt-sync')({ sigint: true });


let age = Number( prompt("Entre your age: ") );

if(age>=18){
    console.log("Éligibldeux e au vote");
}else{
    console.log("Non éligible");
}
