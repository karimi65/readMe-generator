const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown.js')

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'link',
        message: 'Add a link to your project webpage',
    },
    {
        type: 'input',
        name: 'description',
        message: 'write a brief description about your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Write tests for your application.',
    },
    {
        type: 'lists',
        name: 'license',
        message: 'What license did you use?',
        choices: ['Artistic license 2.0', 'MIT', 'ISC', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your Email address?',
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err ? console.error(error) : console.log('Succes! Your ReadMe File Generated.')
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((data) => fs.writeFile('Text.md', generateMarkdown(data), (err) => {
            if (err) throw err;
            console.log('File Saved!');
        }))
        .catch(err => console.log(err));
}

// function call to initialize program
init();
