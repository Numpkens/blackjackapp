let firstCard = 10;
let secondCard = 4;

let sum = firstCard + secondCard;
console.log(sum);

if (sum < 21) {
    console.log("Do you want to draw a new card")
}
else if (sum === 21){
    console.log("Hell ya! You have Blackjack!")
}
else (sum > 21) {
    console.log("Oh! No!")
}


let age = 22;

if (age >= 21){
    console.log("Yes you may enter");
}
else {
    console.log("No No NO");
}

age = 100;
if (age < 100) {
    console.log("no");
}
else if (age == 100){
    console.log("Here is your card")
}
else (age > 100){
    console.log("you already have one")
}
