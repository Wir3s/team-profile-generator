const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");

console.log(Employee);
console.log(Manager);

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

// inquirer.prompt(questions).then((data) => createEmp(data));

// Function to create HTML file

// Generate an employee
// function createEmp(data) {
//   console.log(data);
//   const newEmp = new Employee(data.name, data.email, data.id);
//   console.log(newEmp);
// }

const Andre = new Employee("Andrew", "wires@gmail.com", 45);
console.log(Andre);
