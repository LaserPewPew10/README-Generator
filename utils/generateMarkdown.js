// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contribution](#contribution)
  6. [Tests](#tests)
  7. [Questions](#questions)

  ### Description
  * ${data.description}
  ### Installation
  * ${data.installation}
  ### Usage
  * ${data.usage}
  ### License
  * ${data.license}
  ### Contribution
  * ${data.contribution}
  ### Tests
  * ${data.tests}
  #### Questions
  * ${data.questions}
  * (http://github.com/${data.github})
  * ${data.email}
`;
}

module.exports = generateMarkdown;
