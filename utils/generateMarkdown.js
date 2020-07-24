// function to generate markdown for README
function generateMarkdown(data) {
  var licenseBadge;

  if (data.license === "MIT") {
    licenseBadge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (data.license === "GPL") {
    licenseBadge =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (data.license === "Apache") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (data.license === "Zlib") {
    licenseBadge =
      "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
  }

  return `# ${data.title}
  ${licenseBadge}
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
