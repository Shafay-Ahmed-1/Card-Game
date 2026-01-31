let cards =[];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let resultEl = document.getElementById("result-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

function startGame() {
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    sum = firstCard + secondCard;
    cards = [firstCard , secondCard];
    isAlive = true;
    renderGame();
}
function getRandomNumber() {
    let randomNumber = Math.floor( Math.random()*13) +1;
    if (randomNumber > 10){
        return 10;
    }
    else if (randomNumber === 1){
        return 11;
    }
    return randomNumber;
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
    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomNumber();
        sum += thirdCard; 
        cards.push(thirdCard);
        renderGame();
    }
     else {
        console.log("you can't draw a new card");
    }
    
    
}
