#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\twelcom to muzammil cli number guessing game \n ");

const randomNumber = Math.floor(Math.random() * 10) + 1;

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "enter your guess number(number limit from 1 to ):",

}

]);

if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulations ! you guessed a right number");
}
else {
    console.log(" sorry, you guessed a wrong number , please try again");
 } 
