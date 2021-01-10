const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const jest = require("jest");


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

const teamMemberArray = [];


// Create team profiles
function addTeamMembers(){
    inquirer.prompt([
        {
            type: "list",
            name: "usersChoice",
            message: "What type of employee profile do you want to create?",
            choices: ["Manager" ,"Engineer", "Intern", "All Done"]
        }
    ]).then(choice =>{
        switch(choice.usersChoice){
            case "Manager":
            createManager();
            break;
            case "Engineer":
            addEngineer();
            break;
            case "Intern":
            addIntern();
            break;
            default: teamBuilder();

        }
    })
};
addTeamMembers();


// Creating Manager profile
function createManager() { 
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your id?",
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
        }
    ]).then(answers => {
        var manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMemberArray.push(manager);
        console.log(manager);
        console.log(teamMemberArray);
        addTeamMembers();
    })
} 
createManager();


// // Engineer profile
// function addEngineer(){
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "engineerName",
//             message: "What is the Engineer's name?"

//         },

//         {
//             type: "input",
//             name: "engineerId",
//             message: "What is the Engineer's id?",

//         },

//         {
//             type: "input",
//             name: "engineerEmail",
//             message: "What is the Engineer's email?"

//         },

//         {
//             type: "input",
//             name: "engineerGithub",
//             message: "What is the Engineer's github?"
        
//         }
//     ]).then(answers => {
//     var engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
//     teamMemberArray.push(engineer);
//     console.log(engineer);
//     console.log(teamMemberArray);
//     addTeamMembers();
// })
// }; 
// addEngineer();



// // Intern profile
// function addIntern() {
//     inquirer.prompt([
//     {
//         type: "input",
//         name: "internName",
//         message: "What is the Intern's name?"
//     },

//     {
//         type: "input",
//         name: "internId",
//         message: "What is the Intern's id?",
//     },

//     {
//         type: "input",
//         name: "internEmail",
//         message: "What is the Intern's email?"
//     },

//     {
//         type: "input",
//         name: "internSchool",
//         message: "What is the Intern's school's name?",
//     }
//     ]).then(answers => {
//         var intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
//         teamMemberArray.push(intern);
//         console.log(intern);
//         console.log(teamMemberArray);
//         addTeamMembers();
//     }); 
// };
// addIntern();

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// const generateHTML = (answers) =>
// ``;

function teamBuilder() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }

    fs.writeFileSync(outputPath, render(teamMemberArray), "UTF-8");
}



// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
