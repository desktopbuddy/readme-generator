// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'mit':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'apache':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'agpl':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
      break;
    case 'none':
      return '';
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'mit':
      return 'https://choosealicense.com/licenses/mit/';
      break;
    case 'apache':
      return 'https://choosealicense.com/licenses/apache-2.0/';
      break;
    case 'agpl':
      return 'https://choosealicense.com/licenses/agpl-3.0/';
      break;
    case 'none':
      return '';
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License\nThe application is covered under the following license: [${license}](${renderLicenseLink(license)})`;
  }
  else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description

  ${data.description}

  ## Installation
  
  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  For any additional questions, you can reach out to me here:

  [GitHub](https://github.com/${data.github})
  
  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
