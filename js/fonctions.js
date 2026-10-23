/**
 * afffice un texte a la console
 * @param {string} texte texte qu'on veut afficher
 */
function log(texte) {
    console.log(texte)
}

/**
 * donne la saison selon le mois
 * @param {string} mois le mois qu'on veut savoir la saison
 * @returns string la saison
 */
function saison(mois){
    switch (mois) {
        case ("décembre"):
        case ("janvier"):
        case ("février"):
            console.log("Hiver");
            break;
        case ("mars"):
        case ("avril"):
        case ("mai"):
            console.log("Printemps");
            break;
        case ("juin"):
        case ("juillet"):
        case ("août"):
            console.log("Été");
            break;
        case ("septembre"):
        case ("octobre"):
        case ("novembre"):
            console.log("Automne");
    }
}
/**
 * determine si age est plus haut que 18
 * @param {number} age 
 * @returns true si au dessus de 18
 */
const estMajeur = (age) => {
    if(age >= 18){return true}
    else{return false}
}

/**
 * prompt user pour nom et prenom
 */
function message(){
    var prenom = prompt("quel est votre prenom?")
    var nom = prompt("quel est votre nom?")
    alert(`bonjour ${nom} ${prenom}, je sais ou tu habite... `)
}

log("");

saison("août")

if(estMajeur(17)) {
    console.log("Vous pouvez entrer")
}


