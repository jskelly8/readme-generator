// Packages needed for this application
const inquirer = require('inquirer'); // Version 8.2.4, shown on line 12 of package.json
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter your project title.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.'
    },
    {
        type: 'input',
        name: 'installationInstruction',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your project.',
        choices: ['MIT', '']
    },
    {
        type: 'input',
        name: 'badges',
        message: 'Enter any desired badges to be displayed, other than the license badge, if any.'
    },
    {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features, list them here.'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write tests for your application, & then provide examples on how to run them here.'
    },
    {
        type: 'input',
        name: 'gitHubUser',
        message: 'Enter your GitHub Username so that a link to your Profile will display.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address so people can contact you via email if they have questions regarding your project.'
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName, data));
};

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('Creating file...');
        const markdownContent = generateMarkdown({...responses});

        writeToFile('./README.md', markdownContent);
    });
};

// Function call to initialize app
init();
