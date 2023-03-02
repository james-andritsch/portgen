const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'proTitle',
        message: 'What would you like your project to be named?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('You must enter a valid title for this project.');
                return false;
            }
        }
    },
    {
        
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
