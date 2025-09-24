const prompt = require('prompt-sync')({ sigint: true });

let annee = Number(prompt('Entre liep year'));

if (!isNaN(annee)) {
    const resultat = annee % 4 == 0 && annee % 100 != 0
     ? "est" :
       "n'est pas";
    console.log(`${annee} ${resultat} une année bissextile`);
} else {
    console.log("Veuillez entrer un nombre valide");
}