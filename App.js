// Funzione per calcolare l'equivalente dell'alimento 2
function calcolaEquivalente(calorieAlimento1, calorieAlimento2, quantitaAlimento1) {
    // Calcolo dell'equivalente dell'alimento 2
    const quantitaAlimento2 = (calorieAlimento1 / calorieAlimento2) * quantitaAlimento1;
    return quantitaAlimento2;
}

// Funzione per gestire l'input dell'utente e mostrare il risultato
function gestisciCalcolo() {
    // Input dei dati dall'utente
    const calorieAlimento1 = parseFloat(document.getElementById('calorie1').value);
    const calorieAlimento2 = parseFloat(document.getElementById('calorie2').value);
    const quantitaAlimento1 = parseFloat(document.getElementById('quantita1').value);

    // Calcolo dell'equivalente
    const equivalente = calcolaEquivalente(calorieAlimento1, calorieAlimento2, quantitaAlimento1);

    // Output del risultato con numeri in grassetto
    document.getElementById('risultato').innerHTML = 
        `<span class="bold-number">${quantitaAlimento1}</span> g alimento 1 = <span class="bold-number">${equivalente.toFixed(2)}</span> g alimento 2.`;
}
