// ! TRACCIA

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Buon lavoro!

// ! PROCEDURA

// # RACCOLTA DATI
// * chiedo all'utente il numero di chilometri che vuole percorrere e lo trasformo in numero
const userKmNum = prompt(
  "Inserisci il numero di chilometri che vuoi percorrere"
);
console.log(userKmNum);

// * chiedo all'utente l'età del passeggero e la trasformo in numero
const passengerAge = prompt("Inserisci l'età del passeggero");
console.log(passengerAge);

// * segno il prezzo del biglietto al km
const ticketPriceKm = 0.21;

// * preparo una variabile per il prezzo finale
let finalPriceMessage;

// * variabile sconti
// const saleUnder = "20%";
// const saleOver = "40%";

// # ELABORAZIONE
// * controllo che il numero di chilometri inserito sia valido
// * controllo che l'età del passeggero inserita sia valida

// * SE i dati inseriti sono validi AND l'età è minore di 18
// calcolo prezzo biglietti con sconto del 20%
// * ALTRIMENTI SE i dati inseriti sono validi AND l'età è maggiore uguale a 65
// calcolo prezzo biglietti con sconto del 40%
// * ALTRIMENTI SE i dati inseriti sono validi AND l'età è compresa tra 18 e 65
// calcolo prezzo biglietti senza sconto
// * ALTRIMENTI
// messaggio di errore

// # OUTPUT
// * prezzo finale con due decimali
