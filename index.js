//node modules
const inquirer = require("inquirer");
const fs = require("fs");

const generateTemplate = ({
  title,
  description,
  installation,
  use,
  tests,
  questions,
  license,
  contribution,
  git,
  linkedin,
  email,
}) =>
  `# ${title}



# Table Of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#test)
* [Questions](#questions)
* [License](#license)
# Description
${description}
# Installation
${installation}
# Usage
${use}
# Contribution
${contribution}
# Tests
${tests}
# Questions
${questions}
# License
${license}

${renderLicenseBadge(license)}

# Contact
* Github :${git}
* Linkedin :${linkedin}
* E-Mail : ${email}
`;

//inquirer to generate questions
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the project title?",
    },
    {
      type: "input",
      name: "description",
      message: "A brief description of your project:",
    },
    {
      type: "input",
      name: "installation",
      message: "How to install your project?",
    },
    {
      type: "input",
      name: "use",
      message: "How to use your project?",
    },
    {
      type: "input",
      name: "tests",
      message: "Input team members:",
    },
    {
      type: "input",
      name: "questions",
      message: "Questions:",
    },
    {
      type: "list",
      name: "license",
      message: "Enter your LinkedIn URL.",
      choices: ["MIT", "GPLv3", "GPL", "N/A"],
    },
    {
      type: "input",
      name: "contribution",
      message: "Input contributing team members:",
    },
    {
      type: "input",
      name: "git",
      message: "GitHub username:",
    },
    {
      type: "input",
      name: "linkedin",
      message: "Linkedin username:",
    },
    {
      type: "input",
      name: "email",
      message: "Email address:",
    },
  ])
  .then((answers) => {
    const readmeTemplate = generateTemplate(answers);

    fs.writeFile("README.md", readmeTemplate, (err) =>
      err
        ? console.log(err)
        : console.log("Successfully created the README file!")
    );
  });

function renderLicenseBadge(license) {
  let licenseType = license.license;
  let yourLicense = "";
  if (licenseType === "MIT") {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (licenseType === "GPLv3") {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (licenseType === "GPL") {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`;
  } else {
    license.license = "N/A";
  }
  return yourLicense;
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
