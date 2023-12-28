console.log("JS OK")

// creo l'array del frigo

let fridge = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
console.log(fridge)

// inserisco la pesca nel frigo

fridge.push("pesca");
console.log(fridge)

// do un target al cocomero

const targetElement = "cocomero";

let elementoTrovato = false;

// cerco il cocomero in frigo

for (let i = 0; i < fridge.length; i++) {
    if (fridge[i] === targetElement) {
        elementoTrovato = true;
        break;
    }
}

// Verifica se l'elemento è stato trovato e stampa il messaggio appropriato
if (elementoTrovato) {
    console.log("Trovato! Devo solo preparare il cocktail.");
} else {
    console.log("Oh no, devo uscire a comprare il cocomero!");
}