const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

Manager() 
const promptInput = () => 
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"

        },

        {
            type: "input",
            name: "id",
            message: "What is your id?",
            default: "ID-0129834765"

        },

        {
            type: "input",
            name: "email",
            message: "What is your email?"

        },

        {
            type: "input",
            name: "officeNumber",
            message: "What is your office number?"

        },

        {
            type: "input",
            name: "role",
            message: "What is your role?",
            default: "Manager"
        }
    ])


Engineer()
    const promptInput = () => 
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"

        },

        {
            type: "input",
            name: "id",
            message: "What is your id?",
            default: "ID-0119934725"

        },

        {
            type: "input",
            name: "email",
            message: "What is your email?"

        },

        {
            type: "input",
            name: "github",
            message: "What is your github username?"
        
        },

        {
            type: "input",
            name: "role",
            message: "What is your role?",
            default: "Engineer"
        }
    ])

Intern()
    const promptInput = () => 
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"

        },

        {
            type: "input",
            name: "id",
            message: "What is your id?",
            default: "ID-0110209000"

        },

        {
            type: "input",
            name: "email",
            message: "What is your email?"

        },

        {
            type: "input",
            name: "school",
            message: "What is your school's name?",
            default: "UNCC"
        
        },

        {
            type: "input",
            name: "role",
            message: "What is your role?",
            default: "Intern"
        }
    ])

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                {{ team }}
            </div>
        </div>
    </div>
</body>

</html>`;


promptInput()
    .then((answers) => writeFileAsync('main.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html.'))
    .catch((err) => console.log(err));

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
