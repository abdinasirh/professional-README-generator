// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
        
    
    type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your project title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide short description of your project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter description of your project!');
            return false;
          }
        }
      },
      {
        type: "input",
        name: "installation",
        message: "what instructions do you have for the installation of your app?"
      },
      {
        type: "input",
        name: "usage",
        message: "Provide information for using your app?"
      },
      {
        type: "list",
        name: "license",
        message: "select license type for your project",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
      {
        type: "input",
        name: "contributing",
        message: "List contributors for your app."
      },
      {
        type: "input",
        name: "test",
        message: "provide test information for your app."
      },
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        validate: usernameInput => {
            if (usernameInput) {
              return true;
            } else {
              console.log('Please enter your github username!');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter your email address!');
              return false;
            }
          }
        
    },
];





// // TODO: Create a function to write README file

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)

    // fs.writeFile('generated.md', generateMarkdown(data), function (error) {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log('success! readme file has been generated');
    //     }
    // });
}

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt(questions)
        .then((response) => {
            // console.log(response);
            writeToFile('generated.md', generateMarkdown({ ...response}));
        })

}



// Function call to initialize app
init();
