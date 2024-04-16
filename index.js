// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions  = () => {
    return inquirer
    .prompt([
    {
        type: 'input',
        message: 'What is the title?',
        name: 'Title',
    },
    {    
        type: 'input',
        message: 'What is a Brief description of project:',
        name: 'Description',
    },   
    {
        type: 'input',
        message: 'Provide a table of contents with links to corresponding content:',
        name: 'Table of Contents',
    },
    {
        type: 'input',
        message: 'Step by Step installation instructions:',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'Provide directions and examples for use:',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'Please select a license:',
        name: 'License',
    },
    {
        type: 'input',
        message: 'List of contributing partners or help:',
        name: 'Contributing',
    },
    {
        type: 'input',
        message: 'Write any tests for project:',
        name: 'Tests',
    },
    {
        type: 'input',
        message: 'Questions and how to reach me:',
        name: 'Questions',

    },
    ])
}


// Function for BADGE???//
const badgeLicense = (response) => {
const badge = "";

if (response.license == "MIT License") {
   badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
}
return badge;
};


// TODO: Create a function to write README file
const createReadme = (response) => `

# Title
${response.title}
${badgeLicense(response)}

## Description
${response.description}

## Table of Contents
- [Descripton](#description)
- [Table of Contents](#tableofcontents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Quesions](#questions)

## Installation
${response.install}

## Usage
${response.usage}

## License
${response.License}

## Contributing
${response.credits}


## Tests
${response.test}

## Questions
Reach out with any questions you may have.
Github: (${response.username})
Email: (${response.email})
`;


// TODO: Create a function to initialize app
function init() {
    questions()
    .then((response) => fs.writeFile('Readme.md', createReadme(response), (err) =>
    err ? console.error(err) : console.log('Readme file was succsesfully created.')));
}

// Function call to initialize app
init();
