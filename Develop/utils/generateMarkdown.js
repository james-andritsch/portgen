//  function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  function liceColor(license) {
    if (license.name === 'MIT License') {
      return 'yellow.svg';
    } else if (license.name === 'Mozilla Public License 2.0') {
      return 'brightgreen.svg';
    } else if (license.name ==='Boost Software License 1.0') {
      return 'lightblue.svg';
    } else {
      return 'blue.svg';
    }
  }
  if (license === 'none') {
    return '';
  } else {
    return `[![License](https://img.shields.io/badge/License-${license.badge}-${liceColor(license)})](https://opensource.org/licenses/${license.badge})`;
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return '';
  } else {
    return `## License [${license.name}]({$license.link})`;
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  } else {
    return `## License [${license.name}](${license.link})`;
  }
}

//  generates markdown for README
function generateMarkdown(response) {
  return `# ${response.proTitle}
  ${renderLicenseBadge(response.license)}
  ## Description:
  ${response.description}

  ## Table of Contents:

  -[Installation](#installation)
  -[Usage](#usage)
  -[Contributing](#contributing)
  -[Tests](#tests)
  -[Questions](#questions)
  ${renderLicenseLink(response.license)}

  ## Installation
  ${response.installation}

  ## Usage
  ${response.usage}

  ## Contributing
  ${response.contributions}

  ## Tests
  ${response.testing}

  ## Questions
  If you have any questions, you may contact me using the following links:
  -Please visit my [Github](https://github.com/${response.username})
  -Please email me at [$response.email](mailto:${response.email})

  ${renderLicenseSection(response.license)}
`;
}

module.exports = generateMarkdown;
