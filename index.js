// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a short description of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'screenshot',
      message: 'Please provide the filepath for the screenshot to your project. Example: assets/images/screenshot.png',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Who/what did you use and need to credit in your project?',
    },
    {
// THIS PART NEEDS REVIEW. DONT KNOW ENOUGH ABOUT LICENSES; this shouldn't be a question. Maybe a list to choose from? that would change the type from input to something else
      type: 'input',
      name: 'license',
      message: 'Choose your license:',
    },
    {
        type: 'input',
        name: 'badges',
        message: '',
    },
    {
        type: 'input',
        name: 'features',
        message: '',
    },
    {
        type: 'input',
        name: 'contribute',
        message: '',
    },
    {
        type: 'input',
        name: 'test',
        message: '',
    },
  ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
