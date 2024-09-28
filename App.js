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

    // Output del risultato
    document.getElementById('risultato').textContent = `${quantitaAlimento1} g alimento 1 = ${equivalente.toFixed(2)} g alimento 2.`;
}

// Assicurati di avere un bottone nel tuo HTML che chiama questa funzione
// <button type="button" onclick="gestisciCalcolo()">CALCOLA</button>
