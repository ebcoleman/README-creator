// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
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
    name: 'link', 
    message: 'Please provide the URL of your deployed application.'
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Who/what did you use and need to credit in your project?',
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license for this project.",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'Did anyone else contribute to this project? Please put their GitHub usernames here.',
  },
  {
    type: 'input',
    name: 'features',
    message: 'What are some interesting features of your project?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'If applicable, provide examples on how to run tests on your application.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log('Creating README.md file...');
    writeToFile('./generated/README.md', generateMarkdown({...responses}));
  });
}

// Function call to initialize app
init();

