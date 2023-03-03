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
        type: 'input',
        name: 'description',
        message: 'Please provide a description for this project.',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a description.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide a instructions on how to install this project.',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a instructions.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide a usage description for this project.',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a usage description.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please provide a testing instructions for this project.',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a testing instructions.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'License options are below. Choose from the list.',
        default: "none",
        choices: [
            {
                name: 'MIT License',
                value: {
                    name: 'MIT License',
                    badge: 'MIT',
                    link: 'https://opensource.org/licenses/MIT'
                }
            },
            {
                name: 'ISC License',
                value: {
                    name: 'ISC License',
                    badge: 'ISC',
                    link: 'https://opensource.org/licenses/ISC'
                }
            },
            {
                name: 'Apache License 2.0',
                value: {
                    name: 'Apache License 2.0',
                    badge: 'Apache 2.0',
                    link: 'https://www.apache.org/licenses/LICENSE-2.0'
                }
            },
            {
                name: 'GNU GPLv3',
                value: {
                    name: 'GNU General Public License v3.0',
                    badge: 'GNU_GPLv3',
                    link: 'https://www.gnu.org/licenses/gpl-3.0.en.html'
                }
            },
            {
                name: 'Mozilla Public License 2.0',
                value: {
                    name: 'Mozilla Public License 2.0',
                    badge: 'MPL_2.0',
                    link: 'https://www.mozilla.org/en-US/MPL/2.0/'
                }
            },
            'none'
        ]
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please provide your gGithub username.',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter your Github username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('You must enter a valid email address.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please provide contribution guidelines for this project.',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('You must enter valid contribution guidelines for this project.');
                return false;
            }
        }
    },
];

//  function to write README file
function writeToFile(data) {
    return new Promise ((resolve, reject) => {
        fs.writeFile(`./dist/README.md`, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve ({
                ok: true,
                message: 'Your README has been created! Check /dist to see your new README file.'
            })
        })
    })
}

//  function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => generateMarkdown(answers))
    .then(markdown => writeToFile(markdown))
    .then(writeFileResponse => console.log(writeFileResponse.message))
    .catch(err => console.log(err))
}

// Function call to initialize app
init();
