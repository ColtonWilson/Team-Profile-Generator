const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./templates/htmltemp");
const writeFileAsync = util.promisify(fs.writeFile);


let teamArray = [];
let teamstr = ``;

//Main function
async function main() {
     try {
          //Prompt questions
          await prompt()
          //Take all elements in array and generate card html for each
          for (let i = 0; i < teamArray.length; i++) {
               
               teamstr = teamstr + html.generateCard(teamArray[i]);
          }
          //Take the teamstr and add to final HTML 
          let finalHTML = html.generateHTML(teamstr)
          //Little pause for dramatic tension
          console.log("Working on HTML file");
          wait(5000);
          console.log("HTML has been created in './dist' folder");
          //write file 
          writeFileAsync("./dist/index.html", finalHTML)
     } catch (err) {
          return console.log(err);
     }
};
//Prompt function
async function prompt() {
     let responseDone = "";
     do {
          try {
               response = await inquirer.prompt([

                    {
                         type: "input",
                         name: "name",
                         message: "Employee's name?: "
                    },
                    {
                         type: "input",
                         name: "id",
                         message: "Employee's ID: "
                    },
                    {
                         type: "input",
                         name: "email",
                         message: "Employee's email address: "
                    },
                    {
                         type: "list",
                         name: "role",
                         message: "Employee's role:",
                         choices: [
                              "Engineer",
                              "Intern",
                              "Manager"
                         ]
                    }
               ]);
               let response2 = ""
               // if else statement depending on position
               if (response.role === "Engineer") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "positionAnswer",
                         message: "Employee's github username?:",
                    }, ]);
                    //store the object and push to array
                    const engineer = new Engineer(response.name, response.id, response.email, response2.positionAnswer);
                    teamArray.push(engineer);
               } else if (response.role === "Intern") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "positionAnswer",
                         message: "What school is the employee attending?:",
                    }, ]);
                    //store the object and push to array
                    const intern = new Intern(response.name, response.id, response.email, response2.positionAnswer);
                    teamArray.push(intern);
               } else if (response.role === "Manager") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "positionAnswer",
                         message: "Employee's office number?:",
                    }, ]);
                    //store the object and push to array
                    const manager = new Manager(response.name, response.id, response.email, response2.positionAnswer);
                    teamArray.push(manager);
               }
          } catch (err) {
               return console.log(err);
          }
          console.log(teamArray)
          //prompt to continue
          responseDone = await inquirer.prompt([{
               type: "list",
               name: "finish",
               message: "Add another Employee?: ",
               choices: [
                    "Yes",
                    "No"
               ]
          }, ]);

          //continue running the code if the user selects "yes"
     } while (responseDone.finish === "Yes");    
}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

//call function to run application on the server
main();