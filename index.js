const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown.js')

// const mit = "[![MIT License](https://img.shields.io/npm/l/mi?style=plastic)](https://opensource.org/licenses/MIT)"


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
        message: 'Add a link to your project webpage.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a brief description about your project.',
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
        type: 'list',
        name: 'license',
        message: 'What license did you use?',
        choices: ['Artistic License 2.0', 'MIT', 'ISC', 'Apache License 2.0']
    },
    {
        type: 'input',
        name: 'badge',
        message: 'Add A badge link to your selected License.',
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
        .then((data) => fs.writeFile('Example.md', generateMarkdown(data), (err) => {
            if (err) throw err;
            console.log('File Saved!');
        }))
        .catch(err => console.log(err));
}

// function call to initialize program
init();
