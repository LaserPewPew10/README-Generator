// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  1.[Description](#description)
  2.[Installation](#installation)
  3.[Usage](#usage)
  4.[License](#license)
  5.[Contribution](#contribution)
  6.[Tests](#tests)
  7.[Questions](#questions)

  ### Description
  * ${data.description}
  ### Installation
  * ${data.installation}
  ### Usage
  * ${data.usage}
  ### License
  * ${data.license.join(" ")}
  ### Contribution
  * ${data.contribution}
  ### Tests
  * ${data.tests}
  #### Questions
  * ${data.questions}
  * [${data.github}]
  (http://github.com/${data.github})
  * ${data.email}
`;
}

module.exports = generateMarkdown;
