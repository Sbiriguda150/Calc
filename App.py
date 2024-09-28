# Funzione per calcolare l'equivalente tra due alimenti
def calcola_equivalente(calorie_alimento1, calorie_alimento2, quantita_alimento1):
    # Calcolo dell'equivalente dell'alimento 2
    quantita_alimento2 = (calorie_alimento1 / calorie_alimento2) * quantita_alimento1
    return quantita_alimento2

# Input dei dati
print("Calcolo delle proporzioni tra due alimenti basato sulle calorie.")
calorie_alimento1 = float(input("Inserisci le calorie per 100g dell'alimento 1: "))
calorie_alimento2 = float(input("Inserisci le calorie per 100g dell'alimento 2: "))
quantita_alimento1 = float(input("Inserisci la quantità in grammi dell'alimento 1: "))

# Calcolo dell'equivalente
equivalente = calcola_equivalente(calorie_alimento1, calorie_alimento2, quantita_alimento1)

# Output del risultato
print(f"\n{quantita_alimento1} g alimento 1 = {equivalente:.2f} g alimento 2.")
