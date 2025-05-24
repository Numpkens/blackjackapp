let firstCard = 10;
let secondCard = 4;

let sum = firstCard + secondCard;
let hasBlackJack = false;

let isAlive = true;

if (sum <= 20) {
    console.log("Do you want to draw a new card");
}
else if (sum === 21) {
    console.log("Hell ya! You have Blackjack!");
}
else {
    console.log("Oh! No!");
    isAlive = false;
};

console.log(isAlive);
