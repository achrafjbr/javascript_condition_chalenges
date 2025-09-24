const prompt = require('prompt-sync')({ sigint: true });


let feuTricolore = prompt('Entre feu tricolore : ');

switch(feuTricolore){
    case feuTricolore == "rouge":
        console.log("Arrêt");
        break;
    case feuTricolore == "jaune":
        console.log("Préparez-vous");
        break;
    case feuTricolore == "vert":
        console.log("Allez");
        break;
}
