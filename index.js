// TODO: Include packages needed for this application
const inquirer = require('inquirer'); // Version 8.2.4, shown on line 12 of package.json
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: '',
        name: '',
        message: ''
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName, data));
};

// Function to initialize app
// function init() {
//     inquirer.prompt(questions).then((responses) -> {
//         console.log('Creating a professional README.md file...');
//         writeToFile('./README.md', generateMarkdown({...responses});)
//     });
// };

// Function call to initialize app
init();
