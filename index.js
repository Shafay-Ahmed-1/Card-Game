let firstCard = 11;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

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
<<<<<<< HEAD

console.log(message);
=======
// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
>>>>>>> 785f534b9c092366ea57f4b34d0f576295da70ed
