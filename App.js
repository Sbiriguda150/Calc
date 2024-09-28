function calcolaEquivalente() {
    var calorie1 = parseFloat(document.getElementById('calorie1').value);
    var calorie2 = parseFloat(document.getElementById('calorie2').value);
    var quantita1 = parseFloat(document.getElementById('quantita1').value);

    if (isNaN(calorie1) || isNaN(calorie2) || isNaN(quantita1)) {
        alert("Per favore, inserisci tutti i valori richiesti.");
        return;
    }

    var quantita2 = (calorie1 / calorie2) * quantita1;

    var risultato = document.getElementById('risultato');
    risultato.innerHTML = `<span class="bold-number">${quantita1}</span> g alimento 1 = <span class="bold-number">${quantita2.toFixed(2)}</span> g alimento 2.`;
}
