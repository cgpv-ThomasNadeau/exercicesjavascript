/*
let noms = ["Bob","Ginette","Gertrude","Bernard","Thomas"];
noms.unshift("Bertrand------------------");
noms.push("John");
for (let i = 0; i < noms.length; i++) {
    console.log(noms[i])
}
for (const nom of noms) {
    console.log(nom)
}
noms.forEach((nom) => { console.log(nom) })
*/

/*
let notes = [85, 42, 67, 90, 58, 73];
const notesReussies = notes.filter((note) => { return note >= 60;})

for (let i = 0; i < notesReussies.length; i++) {
    console.log(notesReussies[i]);
}
console.log(notesReussies[notesReussies.length-1]);
*/

/*
let prix = [10, 25, 30, 5, 15];
prixTaxes = prix.map((pri) => {return pri * 1.15})

for (let i = 0; i < prix.length; i++) {
    console.log(prix[i]);
}

for (let i = 0; i < prixTaxes.length; i++) {
    console.log(prixTaxes[i]);
}
*/

/* 
let nombres = [2, 5, 8, 11, 14, 17];
const nombrespair = nombres.filter((nombrepair) => { if (nombrepair % 2 == 0) { return nombrepair; }});
const nombresfois3 = nombrespair.map((nombrex3) => {return nombrex3 * 3});

for (let i = 0; i < nombresfois3.length; i++) {
    console.log(nombresfois3[i]);
}
*/

/* 
const produits = [
    { nom: "Chocolat", prix: 3 },
    { nom: "Chips", prix: 2 },
    { nom: "Café", prix: 8 },
    { nom: "Pain", prix: 4 }
];

const produitsAbordables = produits.filter((produita) => {
    if (produita.prix < 5) { return produita }
})

const nomsProduitsAbordables = produitsAbordables.map((nomp) => {return nomp.nom})

console.table(produitsAbordables)

for (const produit of nomsProduitsAbordables) {
    console.log(produit)
}
*/