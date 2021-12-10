// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if(license === "APACHE 2.0"){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if(license === "ISC"){
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }

  else if(license === "BSD 3-Clause"){
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }

  else{
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license === "MIT"){
    return `[${license}](https://opensource.org/licenses/MIT)`
  }
  else if(license === "APACHE 2.0"){
    return `[${license}](https://opensource.org/licenses/Apache-2.0)`
  }
  else if(license === "ISC"){
    return `[${license}](https://opensource.org/licenses/ISC)`
    
  }
  else if(license === "BSD 3-Clause"){
    return `[${license}](https://opensource.org/licenses/BSD-3-Clause)`
  }
  else{
    return ""
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT"){
    return `Licensed with ${license}. You can read more here:`
  }
  if (license === "APACHE 2.0"){
    return `Licensed with ${license}. You can read more here:`
  }
  if (license === "ISC"){
    return `Licensed with ${license}. You can read more here:`
  }
  if (license === "BSD 3-Clause"){
    return `Licensed with ${license}. You can read more here:`
  }
  else{
    return ""
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${data.description}

${renderLicenseBadge(data.license)}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions) 

## Installation
${data.installation}

[Demo](https://watch.screencastify.com/v/kvGUIR85xPzWeHE3lh6M)

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}


## Contributors
${data.contributors}

## Tests
${data.test}

## Questions

If you have questions, you can reach me at 
* Email: ${data.email}
* Github: https://github.com/${data.username}


`;
}

module.exports = generateMarkdown;
