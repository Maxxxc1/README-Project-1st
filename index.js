// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions  = () => {
    return inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title?',
        name: 'title',
    },
    {    
        type: 'input',
        message: 'What is a Brief description of project:',
        name: 'description',
    },   
    {
        type: 'input',
        message: 'Provide a table of contents with links to corresponding content:',
        name: 'tableOfContents',
    },
    {
        type: 'input',
        message: 'Step by Step installation instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide directions and examples for use:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please select a license:',
        name: 'license',
    },
    {
        type: 'input',
        message: 'List of contributing partners or help:',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Write any tests for project:',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Questions and how to reach me:',
        name: 'questions',

    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }
    ]);
};


// Function for BADGE???//
const badgeLicense = (response) => {
let badge = '';

if (response.license === 'MIT License') {
   badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
}
return badge;
};


// TODO: Create a function to write README file
const createReadme = (response) => `
# ${response.title}
${badgeLicense(response)}

## Description
${response.description}

## Table of Contents
- [Description](#description)
- [Table of Contents](#tableOfContents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Quesions](#questions)

## Installation
${response.installation}

## Usage
${response.usage}

## License
${response.license}

## Contributing
${response.contributing}


## Tests
${response.tests}

## Questions
Reach out with any questions you may have.
Github: ${response.username}
Email: ${response.email}
`;


// TODO: Create a function to initialize app
function init() {
    questions().then((response) => 
    fs.writeFile('Readme.md', createReadme(response), (err) =>
    err ? console.error(err) : console.log('Readme file was succsesfully created.')));
}

// Function call to initialize app
init();
