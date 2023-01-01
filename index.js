const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const { getSystemErrorName } = require("util");

console.log(Employee);

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your ID number?",
  },
];

inquirer.prompt(questions).then((data) => createEmp(data));

// Function to create HTML file

// Generate an employee
function createEmp(data) {
  console.log(data);
  const newEmp = new Employee(data.name, data.email, data.id);
  console.log(newEmp);
}


