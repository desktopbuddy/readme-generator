// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "Enter the title of your project: ",
        name: "title",
    },
    {
        type: 'input',
        message: "Enter your GitHub username: ",
        name: "username",
    },
    {
        type: 'input',
        message: "Enter your email: ",
        name: "email",
    },
    {
        type: 'input',
        message: "Enter installation instructions: ",
        name: "installation",
    },
    {
        type: 'input',
        message: "Enter usage information: ",
        name: "usage",
    },
    {
        type: 'input',
        message: "Enter contribution guidelines: ",
        name: "contribution",
    },
    {
        type: 'input',
        message: "Enter test instructions: ",
        name: "test",
    },
    {
        type: 'list',
        message: "Choose a license for your application: ",
        name: "license",
        choices: ['mit', 'apache', 'agpl', 'none']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), "utf8", (err) => 
        err ? console.error(err) : console.log('README.md created!')
    );
}

// TODO: Create a function to initialize app
function init() {
    // Get inputs from user using inquirer to get the data to write
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile("README.md", response);
        })
}

// Function call to initialize app
init();
