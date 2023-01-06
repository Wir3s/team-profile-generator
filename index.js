const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const generate = require("./src/sample");

console.log(Employee);
console.log(Manager);

const team = [];

// Array of questions for user input
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the team manager?",
  },
  {
    type: "input",
    name: "email",
    message: "What is their email address?",
  },
  {
    type: "input",
    name: "id",
    message: "What is their ID number?",
  },
  {
    type: "input",
    name: "office",
    message: "What is their office number?",
  },
  {
    type: "list",
    name: "menu",
    choices: ["Engineer", "Intern", "Done"],
    message: "Do you have another team member to add?",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the Engineer?",
  },
  {
    type: "input",
    name: "email",
    message: "What is their email address?",
  },
  {
    type: "input",
    name: "id",
    message: "What is their ID number?",
  },
  {
    type: "input",
    name: "gitHub",
    message: "What is their GitHub account name?",
  },
  {
    type: "list",
    name: "menu",
    choices: ["Engineer", "Intern", "Done"],
    message: "Do you have another team member to add?",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the Intern?",
  },
  {
    type: "input",
    name: "email",
    message: "What is their email address?",
  },
  {
    type: "input",
    name: "id",
    message: "What is their ID number?",
  },
  {
    type: "input",
    name: "school",
    message: "What is the name of their school?",
  },
  {
    type: "list",
    name: "menu",
    choices: ["Engineer", "Intern", "Done"],
    message: "Do you have another team member to add?",
  },
];

inquirer.prompt(managerQuestions).then((data) => {
  if (data.menu === "Done") {
    console.log(data);
    createManager(data);
  }
  if (data.menu === "Engineer") {
    inquirer.prompt(engineerQuestions);
  }
  if (data.menu === "Intern") {
    inquirer.prompt(internQuestions);
  }
});

// inquirer.prompt(managerQuestions).then((data) => createManager(data));

// Generate a Manager
function createManager(data) {
  console.log(data);
  const teamManager = new Manager(data.name, data.email, data.id, data.office);
  console.log(teamManager);
  //writeToFile(teamManager);
  team.push(teamManager);
  console.log(team);
}

// Generate an Engineer

// function createEngineer(data) {
//   console.log(data)
//   const teamEng = new Engineer(data.name, data.email, data.id, data.gitHub);
//   team.push(teamEng);
//   console.log(team);
// }

// Generate an Intern

// function createIntern(data) {
//   console.log(data)
//   const teamInt = new Intern(data.name, data.email, data.id, data.school);
//   team.push(teamInt);
//   console.log(team);
// }

// Function to create HTML file
function writeToFile(data) {
  console.log(data);
  fs.writeFile("./dist/index.html", generate(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}
