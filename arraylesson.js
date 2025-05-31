 let messages = [
     "Hey",
     "How are you",
     "I am fine."
 ];

let newMessage = "I dont care";
messages.push(newMessage);
/* 
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

let player1Time = 102;
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


