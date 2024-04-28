#! /usr/bin/env node
import inquirer from "inquirer";
let userHeight = await inquirer.prompt([
    {
        name: "height",
        type: "number",
        message: "Enter Your Height in Meters: "
    },
]);
let userWeight = await inquirer.prompt([
    {
        name: "weight",
        type: "number",
        message: "Enter Your Weight in KiloGrams: "
    },
]);
let heightSquare = userHeight.height * userHeight.height;
let bmiCalculation = userWeight.weight / heightSquare;
let bmi = (bmiCalculation.toFixed(1));
console.log(`Your Body Mass Index is ${bmi}kg/m2`);
