const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generate = require("./src/sample");

console.log(Employee);
console.log(Manager);

const team = [];

// Arrays of questions for user input

// Questions to for Manager
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
    validate: (val) => /[1-9]/gi.test(val),
  },
  {
    type: "input",
    name: "office",
    message: "What is their office number?",
  },
];
// Questions for main menu
const menuQuestions = [
  {
    type: "list",
    name: "menu",
    choices: ["Engineer", "Intern", "Done"],
    message: "Do you have another team member to add?",
  },
];
// Questions to create Engineer
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
    validate: (val) => /[1-9]/gi.test(val),
  },
  {
    type: "input",
    name: "gitHub",
    message: "What is their GitHub account name?",
  },
];
// Questions to create Intern
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
    validate: (val) => /[1-9]/gi.test(val),
  },
  {
    type: "input",
    name: "school",
    message: "What is the name of their school?",
  },
];


// Generate a Manager
function createManager() {
  inquirer.prompt(managerQuestions).then((data) => {
    const teamManager = new Manager(
      data.name,
      data.email,
      data.id,
      data.office
    );
    team.push(teamManager);
    mainMenu();
  });
}
// Main menu for prompts
function mainMenu() {
  inquirer.prompt(menuQuestions).then((data) => {
    switch (data.menu) {
      case "Done":
        writeToFile(team);
        break;
      case "Engineer":
        createEngineer();
        break;
      case "Intern":
        createIntern();
        break;
    }
  });
}

// Generate an Engineer

function createEngineer() {
  inquirer.prompt(engineerQuestions).then((data) => {
    const teamEng = new Engineer(data.name, data.email, data.id, data.gitHub);
    team.push(teamEng);
    mainMenu();
  });
}

// Generate an Intern

function createIntern() {
  inquirer.prompt(internQuestions).then((data) => {
    const teamInt = new Intern(data.name, data.email, data.id, data.school);
    team.push(teamInt);
    mainMenu();
  });
}

// Function to create HTML file
function writeToFile(data) {
  console.log(data);
  fs.writeFile("./dist/index.html", generate(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

createManager();
