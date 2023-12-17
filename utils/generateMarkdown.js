// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'Apache') {
    return '![License: Apache](https://img.shields.io/badge/License-Apache-blue.svg)';
  } else if (license === 'BSD') {
    return '![License: BSD](https://img.shields.io/badge/License-BSD-green.svg)';
  } else if (license === 'Unlicense') {
    return '![License: Unlicense](https://img.shields.io/badge/License-Unlicense-lightgrey.svg)';
  } else {
    return '';
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache') {
    return '[Apache License](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'BSD') {
    return '[BSD License](https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license === 'Unlicense') {
    return '[Unlicense](http://unlicense.org/)';
  } else {
    return '';
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== '') {
    return `
    ## License
    ${renderLicenseBadge(data.license)}
    ${renderLicenseLink(data.license)}

    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  // other badge render function???

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Badges](#badges)
  - [Features](#features)
  - [How to Contribute](#how to Contribute)
  - [Tests](#tests)
  - [Questions?](#questions?)

  ## Installation
  ${data.installationInstruction}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ${renderLicenseSection(data.license)}

  ## Badges
  ${data.badges}

  ## Features
  ${data.features}

  ## How to Contribute
  ${data.contribute}

  ## Tests
  ${data.tests}

  ## Questions?
  If you have any questions, feel free to reach out to me via [GitHub](https://github.com/${data.gitHubUser}/) or email me at ${data.email}.

`;
}

module.exports = generateMarkdown;
