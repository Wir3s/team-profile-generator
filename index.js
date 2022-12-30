const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require('./employee');

console.log(Employee);


// Array of questions for user input
const questions = [
    {
      type: "input",
      name: "manager",
      message: "Who is the project manager?",
    },
]




 inquirer.prompt(questions).then((data) => writeToFile(data));

// Function to write README file
// function writeToFile(data) {
//   console.log(data);
//   fs.writeFile("./utils/README.MD", generate(data), (err) =>
//     err ? console.log(err) : console.log("Success!")
//   );
// }