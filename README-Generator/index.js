const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({githubName, projectName,description, dependenciesCommand, testCommands, usage, contributing, email, license}) =>
`# ${projectName}
![GitHub License](https://img.shields.io/badge/License-${license}-blue.svg)

## Description

${description}

## Table of Contents

-[Installation](#installation)

-[Usage](#usage)

-[License](#license)

-[Contributing](#contributing)

-[Tests](#tests)

-[Questions](#questions)

## Installation

In order install the dependencies for the project, run the following commands in the terminal:

${dependenciesCommand}

## Usage

What you should know about using this repo:

${usage}

## License 

${license}

## Contributing

How you can contribute:

${contributing}

## Tests

If you want to run tests for the application, run the following commands in your terminal:

${testCommands}

## Questions

For questions, contact me on GitHub at https://github.com/${githubName} or Email me at: ${email}`;

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'githubName',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'projectName',
        },
        {
            type: 'input',
            message: 'Write a brief description of your project.',
            name: 'description',
        },
        {
            type: 'list',
            choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'VSD_3', 'None'],
            message: 'What kind of license will your project have?',
            name: 'license',
        },
        {
            type: 'input',
            message: 'What commands should be used to install your projects dependencies?',
            name: 'dependenciesCommand',
        },
        {
            type: 'input',
            message: 'What commands should be used to run tests?',
            name: 'testCommands',
        },
        {
            type: 'input',
            message: 'What should users need to know about using the repo?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'How can users contribute to the repo?',
            name: 'contributing',
        },
    ])
    .then((data) => {
        const readmeContent = generateREADME(data);

        fs.writeFile('README.md', readmeContent, (err) => 
        err ? console.log(err) : console.log('Success!')
        );
    })