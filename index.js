//node modules
const inquirer = require("inquirer");
const fs = require("fs");

const generateTemplate = ({
  title,
  description,
  installation,
  use,
  credits,
  license,
  contribute,
  git,
  linkedin,
  email,
}) =>
  `# ${title}
* [Description][#description]
* [Installation][#installation]
* [Usage][#usage]
* [Contribution][#contribution]
* [Credits][#credits]
* [License][#license]
# Description
${description}
# Installation
${installation}
# Usage
${use}
# Contribution
${contribute}
# Credits
${credits}
# License
${license}

#Contact
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
      name: "credits",
      message: "Input team members:",
    },
    {
      type: "list",
      name: "license",
      message: "Enter your LinkedIn URL.",
      choices: ["MIT", "GPL", "Apache", "N/A"],
    },
    {
      type: "input",
      name: "contribute",
      message: "How to contribute to the project?",
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

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
