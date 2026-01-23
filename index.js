let firstCard = 11;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let resultEl = document.getElementById("result-el");


function startgame() {
    if (sum < 20) {
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
    document.getElementById("card-el").textContent += " " + firstCard + " _ " + secondCard;
    document.getElementById("sum-el").textContent += " " +sum; 
    resultEl.textContent = message;
}
