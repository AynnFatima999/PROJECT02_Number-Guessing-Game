#!  /usr/bin/env node
import inquirer from "inquirer"


let randomNumber = Math.floor(Math.random() * 10 + 1);

let user = await inquirer.prompt([{
name : "userGuess",
type : "number",
message : "Guess the Number between 1 to 10:"
}]);
if(user.userGuess === randomNumber){
    console.log("Congratulations! You guess right.");
}
else {
    console.log("Aww! you guessed wrong. Try again.")
}













