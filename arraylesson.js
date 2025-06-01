/* let messages = [
     "Hey",
     "How are you",
     "I am fine."
 ];

let newMessage = "I dont care";
messages.push(newMessage);
console.log(messages);


messages.push(newMessage);
console.log(messages);

messages.pop(3);
console.log(messages);


for (let count =1; count < 11; count += 1 ) {
    console.log(count);
}
for ( let count = 10; count <101; count += 10){
    console.log(count);
}
for (let i = 0; i < messages.length; i++) {
    console.log(messages[i]);
}

let cards = [7, 3, 9];


for ( let i = 0; i < cards.length; i++){
    console.log(cards[i]);
}


let sentence = ["Hello", "my", "name", "is", "David"];
let greetingEl = document.getElementById("greeting-el");


for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " ";
};
*/

/*let player1Time = 102;
let player2Time = 107;

function getFastest(){
    if (player1Time < player2Time) {
        return player1Time;
    } else if (player2Time < player1Time) {
        return player2Time;
    } else {
        return player1Time
    }
    }

function getTotalRaceTime() {
    return player1Time + player2Time;
}

let totalTime = getTotalRaceTime();*/

/*let randomNumber = Math.random() * 6;

console.log(randomNumber);*/

//It returns a random number between 0 and 1 (not including 1)

//Dice random logic/varible

//function rollDice() {
//    let randomNumber = Math.floor(Math.random() * 6 ) + 1;
//    return randomNumber;
//}

/* let completedCert = true;
let giveCert = true;

if (completedCert === true && giveCert === true){
    generateCert();
}



function generateCert(){
    console.log("Generating Cert......");
}
*/
/*
let likesDocumentaries = false;
let likesStartups = false;

if (likesDocumentaries === true || likesStartups === true){
    recommendedMovie();
}

function recommendedMovie() {
    console.log("Hey, check this movie out!");
}
*/

let course = {
    title: "Learn CSS",
    lessons: 10,
    creator: "David",
    length: 63,
    level: "Starter",
    isFree: true,
    tags: ["html", "css"]
};

let castle = {
    isStone: true,
    name: "Manor Estate",
    age: 300,
    tags: ["English", "Rural"]
};
console.log(castle.name, castle.age);






