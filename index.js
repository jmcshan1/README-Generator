const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({username, title,description, commandInstall, commandRun, usage, contributing, tests, email, license}) =>
    `# ${title}
    ![GitHub License]()
    
    ## Description
    
    ${description}
    
    ## Table of Contents
    
    *[Installation](#installation)
    
    *[Usage](#Usage)
    
    *[License](#License)
    
    *[Contributing](#Contributing)
    
    *[Tests](#Tests)
    
    *[Questions](#Questions)
    
    ## Installation
    
    ${installation}
    
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

    ])