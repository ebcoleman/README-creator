// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ![alt text](${data.screenshot})

  URL for deployed application:
   ${data.link}

  ## Credits
  ${data.credits}

  ## License
 
  This project is licensed under the ${data.license} license.

  ## Contributing
  ${data.contribute}

  ## Features
  ${data.features}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, feel free to reach out to me at ${data.email}. You can also visit my GitHub profile: [${data.github}](https://github.com/${data.github})
  `;
}

module.exports = generateMarkdown;
