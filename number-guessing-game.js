/*
In this file, re-write your number guessing game 
(from the basic javascript workshop) for the command line!

Instead of using prompt and alert, you will have to use capabilities from NodeJS
and any external module. HINT: there is an npm library called prompt that can 
help you with that :)
*/

var prompt = require('prompt')

//set computer randomNumber from 1-100
var randomNumber = Math.floor(Math.random() * 100 + 1) 

//number of tries given
var userChoice = 4;


function game(guess) {
    
    prompt.get(["Pick a number from 1 to 100"], function(err, res) {
            err ? console.log(err) : null

            var num = Number(res["Pick a number from 1 to 100"])

            if (num === randomNumber) {
                console.log("You win!")
                return
            }
            if (guess < 1) {
                console.log("game over! No more tries left")
                return
            }

            if (num > randomNumber) {
                console.log("Too high")
                guess--
                game(guess)
            }
            if (num < randomNumber) {
                console.log("Too low")
                guess--
                game(guess)
            }
        })
}
game(userChoice)
