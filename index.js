let firstCard = 11;
let secondCard = 9;
let cards =[firstCard,secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let resultEl = document.getElementById("result-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

function startGame() {
    renderGame();
}

function renderGame() {
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
cardEl.textContent = "cards : ";

for(let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
}
    
    sumEl.textContent = "sum : " + sum; 
    resultEl.textContent = message;
}
function newCard() {
    let thirdCard = 1;
    sum += thirdCard; 
    cards.push(thirdCard);
    renderGame();
    
}
