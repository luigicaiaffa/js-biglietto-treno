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
const userKmNum = parseInt(
  prompt("Inserisci il numero di chilometri che vuoi percorrere")
);

// * chiedo all'utente l'età del passeggero e la trasformo in numero
const passengerAge = parseInt(prompt("Inserisci l'età del passeggero"));

// * segno il prezzo del biglietto al km
const ticketPriceKm = 0.21;

// * preparo una variabile per il prezzo finale
let finalPriceMessage;

// * variabile sconti
let appliedSale;

// * variabile total price
let totalPrice;

// # ELABORAZIONE
// * controllo che il numero di chilometri inserito sia valido
const isUserKmNumValid = !isNaN(userKmNum) && !userKmNum <= 0;

// * controllo che l'età del passeggero inserita sia valida
const isPassengerAgeValid = !isNaN(passengerAge) && !passengerAge <= 0;

// * controllo se si applicano sconti per l'età
const isSaleUnderValid = passengerAge < 18;
const isSaleOverValid = passengerAge >= 65;

// * SE i dati inseriti sono validi
if (isUserKmNumValid && isPassengerAgeValid) {
  // calcolo prezzo biglietti senza variabili
  totalPrice = userKmNum * 0.21;

  // * SE l'età è minore di 18
  if (isSaleUnderValid) {
    // calcolo sconto 20%
    appliedSale = (totalPrice * 20) / 100;
  }

  // * ALTRIMENTI SE l'età è maggiore uguale a 65
  else if (isSaleOverValid) {
    // calcolo sconto 40%
    appliedSale = (totalPrice * 40) / 100;
  }

  // * ALTRIMENTI l'età è compresa tra 18 e 65
  else {
    appliedSale = 0;
  }

  // calcolo prezzo biglietti finale
  finalPriceMessage = (totalPrice - appliedSale).toFixed(2) + " €";
}

// * ALTRIMENTI
else {
  // messaggio di errore
  alert("Dati inseriti incorrettamente");
}

// # OUTPUT
// * prezzo finale con due decimali
alert(finalPriceMessage);

// * debug console
console.log(`
    ticketPriceKm : ${ticketPriceKm}
    userKmNum : ${userKmNum}
    passengerAge : ${passengerAge}
    isPassengerAgeValid : ${isPassengerAgeValid}
    isUserKmNumValid : ${isUserKmNumValid}
    totalPrice : ${totalPrice}
    isSaleUnderValid : ${isSaleUnderValid}
    isSaleOverValid : ${isSaleOverValid}
    appliedSale : ${appliedSale}
    finalPriceMessage : ${finalPriceMessage}
`);
