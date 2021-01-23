//importing inquirer npm 
const inquirer = require('inquirer');
//using javascript builtin Fs package
const fs = require('fs');
//storing javascript string laters to a file in a  current folder
const FILE_PATH = './README.md'

//prompting for user input for each question

inquirer.prompt([
    {
        type:'input',
        message:"What is your project Title:",
        name:'Title'
    },

    {
        type: 'input',
        message:'Write Description to your project:' ,
        name: 'description'
    },

    {
        type: 'input',
        message:'What are the steps required to install your project?' ,
        name: 'installation'
    },
    {
        type: 'input',
        message:'Provide instructions for usage:' ,
        name: 'Usage'
    },

    {
        type: 'input',
        message:'Would you like other developers to contribute to it: ' ,
        name: 'Contributing'
    },
    {
        type: 'input',
        message:'Write a tests for your application:' ,
        name: 'Tests'
    },
    
    {
        type:'input',
        message: 'List Your Collaborator or any third part assets that require attribution: ',
        name:'credits'

    },
    {
        type: 'checkbox',
        message:'Choose a license: ' ,
        choices: [
            'MIT',
            'Apache',
            'GPL',
            'BSD',
            'None',
        ],
        name: 'License',
    },
    {
        type:'input',
        message: 'What is your Github User name:',
        name:'username'

    },
    {
        type:'input',
        message: 'What is your email address:',
        name:'useremail'

    }
    
]).then((response) =>{
    //response stores all the user response in an object, based on the response readme file generates
    console.log(response);
    //storing user response in variable content
    //using string leteral

    const content = `
  # Title:
        ${response.Title}
  ## Description:
  ![license](https://img.shields.io/badge/License-${response.License}-green.svg "License Badge")
     
        ${response.description}

  ## Table of Contents: 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Credits](#credits)
  - [License](#License)
  - [Questions](#Questions)

  ## Installation
        ${response.installation}

  ## Usage
        ${response.Usage}

  ## Contributing
        ${response.Contributing}

  ## Tests
        ${response.Tests}

  ## Credits
        ${response.credits}

  ## License

  This project is covered under  the following licence: ${response.License}

  
  

  ## Questions
  Below is my GitHub Profile
  - [GitHub Profile](https://github.com/${response.username})

  - For any further question, reach out to me at: 
        email:${response.useremail}
  
    `

    fs.writeFile(FILE_PATH, content, (err) => {
        err ? console.log(err): console.log('Success!')
    });

}); 


