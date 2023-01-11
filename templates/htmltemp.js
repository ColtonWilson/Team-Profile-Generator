//All HTML code with the card string added.
const generateHTML = function (teamstr) {

        return `<!DOCTYPE html>
        <html lang="en">
    
         <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Team-Profile-Generator</title>
        <style>
            .header {
                background-color: salmon;
                border: solid black;
                text-align: center;
                font-size: 30px;
                color: azure; 
            }
            .container-body {
                display: flex;
                justify-content: space-evenly;
            }
            .card {
                background-color:rgb(255, 255, 255);
                margin-top: 4%;
                border: solid black;
                font-size: x-large;
            }
            .card-header{
                background-color: #0b79ee;
                color: azure;
                margin-top: -30px;
            }
            .card-body{
                margin-left: -39px;
            }
            li{
                border: 1px solid black;
                list-style-position: inside;
                list-style-type: none;
            }
        </style>
   
        </head>
    
        <body>
            <div class=header>
            <h1>My Team</h1>
            </div>
            <div class="container-body">
             ${teamstr} 
            </div>
        <script src="https://kit.fontawesome.com/6e88006197.js" crossorigin="anonymous"></script>           
        </body>
    
        </html>`

}

    //Make array element into an html string
    const generateCard = function (arr) {
        let roleInfo;
        let roleIcon;

        if (arr.title === "Manager") {
            roleInfo = `Office Number: ${arr.officeNumber}`;
            roleIcon = `<i class="fa-solid fa-mug-hot"></i>`;
        } else if (arr.title === "Engineer") {
            roleInfo = `Github Username: <a href = "https://github.com/${arr.github}" target="_blank">${arr.github}</a>`;
            roleIcon = `<i class="fa-solid fa-glasses"></i>`;
        } else if (arr.title === "Intern") {
            roleInfo = `School: ${arr.school}`;
            roleIcon = `<i class="fa-solid fa-user-graduate"></i>`;
        }

        return `<div class="card">
        <div class="card-header">
            <h2>${arr.name}</h2>  
            <h2>${roleIcon}  ${arr.title}</h2>
            <hr>
        </div>
        <div class="card-body">
            <ul>
                <li>ID: ${arr.id}</li>
                <li>Email: <a href = "mailto: ${arr.email}"> ${arr.email}</a></li>
                <li>${roleInfo} </li>
            </ul>
        </div>
        </div>`
    }

    exports.generateHTML = generateHTML
    exports.generateCard = generateCard;