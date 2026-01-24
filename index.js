let firstCard = 11;
let secondCard = 9;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let resultEl = document.getElementById("result-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

function startgame() {
    if (sum <= 20) {
    message ="Do you want to draw a new card?🙂 ";
}
else if (sum === 21) {
    message = "wohoo! You've got Blackjack!🥳 ";
    hasBlackJack = true;
}
else {
    message = "You're out of the game! 😞 ";
    isAlive = false;
}
    cardEl.textContent +=  firstCard + "   " + secondCard;
    sumEl.textContent += sum; 
    resultEl.textContent = message;
}
