//node modules
const inquirer = require("inquirer");
const fs = require("fs");

function renderLicenseBadge(license) {
  let yourLicense = "";
  if (license === "MIT") {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "GPLv3") {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === "GPL") {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`;
  } else {
    yourLicense = "N/A";
  }
  return yourLicense;
}

const generateTemplate = ({
  title,
  description,
  installation,
  use,
  tests,
  license,
  contribution,
  git,
  email,
}) =>
  `# ${title}
  ${renderLicenseBadge(license)}
# Table Of Contents
* [Description](#description)
* [Demo](*demo)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#test)
* [Questions](#questions)
* [License](#license)
# Description
${description}
# Demo
<img src="assets/README.mp4" type="video/mp4"/>
# Installation
${installation}
# Usage
${use}
# Contribution
${contribution}
# Tests
${tests}
# Questions
* [Github: https://github.com/${git}](https://github.com/${git})
* [Email: ${email}](mailto:${email})
# License
${license}
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

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
