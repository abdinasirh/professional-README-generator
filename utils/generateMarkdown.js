// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if(license === "APACHE 2.0"){
    return ""
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}, 

${data.description}

${renderLicenseBadge(data.license)}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions) 

## Installation
${data.installation}
## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions

if you have questions, you can reach me at ${data.email}
or my github page https://github.com/${data.username}


`;
}

module.exports = generateMarkdown;
