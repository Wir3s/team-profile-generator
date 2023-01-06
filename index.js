const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
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
    message: "Do you have another team memeber to add?",
  },
];

inquirer.prompt(managerQuestions).then((data) => createManager(data));

// Function to create HTML file

// Generate a Manager
function createManager(data) {
  console.log(data);
  const teamManager = new Manager(data.name, data.email, data.id, data.office);
  console.log(teamManager);
  writeToFile(teamManager);
 // team.push(teamManager);
  console.log(team);
}

function writeToFile(data) {
  console.log(data);
  fs.writeFile("./dist/index.html", generate(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}
