
// BONUS: (da fare solo se funziona tutto il resto)
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

do {
   var difficulty = parseInt(prompt("Scegli una difficoltà da 0 a 2:"));
} while (difficulty <0 || difficulty > 2);

if (difficulty == 0) {
   maxRange = 100;
} else if (difficulty ==1) {
   maxRange = 80;
} else {
   maxRange = 50;
}

var bombs = [];
var playerChoise = [];
var maxBombs = 16;

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
do {
   var number = getRandomNum(1, maxRange);
   if (existInArray(number, bombs) == false) {
      bombs.push(number);
   } 
} while (bombs.length < maxBombs);
console.log(bombs);



// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.

var maxAttempts = 100 - bombs.length;
var gameOver = false;

do {
   do {
      var choise = parseInt(prompt("Inserisci un numero da 1 a " + maxRange));
   } while (isNaN(choise) || choise < 1 || choise > maxRange);

   if (existInArray(choise, bombs)) {
      gameOver = true;
   } else {
      if (existInArray(choise, playerChoise) == false) {
         playerChoise.push(choise);
      }
   }
} while (playerChoise.length < maxAttempts && gameOver == false);
console.log(playerChoise);

// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

console.log("Il tuo punteggio è: " + playerChoise.length);

