// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  // the title shows in the generatedREADME correctly, the below answer doesnt show in the readme at all. troubleshoot tomorrow
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a short description of your project.',
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    const readmeContent = generateMarkdown(answers);

    // Write the README file
    fs.writeFile('generatedREADME.md', readmeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('generatedREADME.md created successfully!');
      }
    });
  })
  .catch((err) => console.error(err));

// inquirer
//   .prompt([
    // {
    //   type: 'input',
    //   name: 'title',
    //   message: 'What is the title of your project?',
    // },
    // {
    //   type: 'input',
    //   name: 'description',
    //   message: 'Please provide a short description of your project.',
    // },
//     {
//         // this needs to be done differently than the rest, not sure what as of right now
//         type: 'input',
//         name: 'tableOfContents',
//         message: '',
//     },
//     {
//       type: 'input',
//       name: 'installation',
//       message: 'What are the steps required to install your project?',
//     },
//     {
//       type: 'input',
//       name: 'screenshot',
//       message: 'Please provide the filepath for the screenshot to your project. Example: assets/images/screenshot.png',
//     },
//     {
//       type: 'input',
//       name: 'credits',
//       message: 'Who/what did you use and need to credit in your project?',
//     },
//     {
// // THIS PART NEEDS REVIEW. DONT KNOW ENOUGH ABOUT LICENSES; this shouldn't be a question. Maybe a list to choose from? that would change the type from input to something else
//       type: 'input',
//       name: 'license',
//       message: 'Choose your license:',
//     },
//     {
//         type: 'input',
//         name: 'badges',
//         message: '',
//     },
//     {
//         type: 'input',
//         name: 'features',
//         message: '',
//     },
//     {
//         type: 'input',
//         name: 'contribute',
//         message: '',
//     },
//     {
//         type: 'input',
//         name: 'test',
//         message: '',
//     },
//   ])
//   .then((answers) => {
//     const readmePageContent = generateMarkdown(answers);
//   }

// TODO: Create a function to write README file
function writeToFile(README, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
