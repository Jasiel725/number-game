const a = document.getElementById("checkButton");
var x = document.getElementById("attemptCount");
var guessNumber = Math.round(Math.random() *100);
var text;
var attemptsCount = 10;

function check(){
    let userInput = document.getElementById("textBox").value;
attemptsCount--;
if(userInput == guessNumber){
    alert("congrats!You win");
 location.href = "./win.html";
}

else if(userInput < guessNumber){
alert ("try larger");

}
else {
   alert("try smaller");
}
 if(attemptCount == 0){
    alert("sorry!You loose");
location.href = "./loose.html";
}

x.innerHTML = attemptsCount;

}