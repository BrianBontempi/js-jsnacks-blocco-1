console.log("JS OK")

// Chiedi all'utente quanti elementi dovrebbe contenere l'array
const numeroElementi = parseInt(prompt("Inserisci il numero di elementi dell'array:"));

// Verifica se l'input è un numero valido
if (isNaN(numeroElementi) || numeroElementi <= 0) {
    console.log("Inserisci un numero valido di elementi.");
} else {
    // Crea un array e genera numeri casuali
    const arrayRandom = [];
    for (let i = 0; i < numeroElementi; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        arrayRandom.push(randomNumber);
    }

    // Stampa l'intero array
    console.log("Array completo:", arrayRandom);

    // Stampa gli ultimi 5 elementi dell'array
    const ultimi5Elementi = arrayRandom.slice(-5);
    console.log("Ultimi 5 elementi dell'array:", ultimi5Elementi);
}