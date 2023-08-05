const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({username, title,description, commandInstall, commandRun, usage, contributing, tests, email, license}) =>
`# ${title}

## Description

${description}

## Table of Contents

-[Installation](#installation)

-[Usage](#Usage)

-[License](#License)

-[Contributing](#Contributing)

-[Tests](#Tests)

-[Questions](#Questions)

## Installation

In order install the dependencies, run the following in the terminal:

${commandRun}

## Usage

${usage}

## License 

${license}

## Contributing

${contributing}

## Tests

${tests}

## Questions

Email me at: ${email}`;

inquirer
    .prompt([
        {
            type: 
        }

    ])
    .then((data) => {
        const readmeContent = generateREADME(data);

        fs.writeFile('README.md', readmeContent, (err) => 
        err ? console.log(err) : console.log('Success!')
        );
    })