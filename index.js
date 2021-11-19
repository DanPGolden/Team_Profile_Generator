const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const fs = require('fs');

let employeeGen = [];
const initializePrompt = () => {
	return inquirer
		.prompt([
			{
				type: 'checkbox',
				name: 'employeeType',
				message: 'Which type of employee would you like to add?',
				choices: ['Engineer', 'Intern', 'Manager', 'None to add, my team is complete!'],
			},
		])
		.then((response) => {
			if (response.employeeType != 'None to add, my team is complete!') {
				initializeQuestions(response.employeeType);
			} else {
				fs.writeFileSync('./dist/team.html', starterHtml(employeeGen), (err) => {
					if (err) throw err;
					console.log('HTML file created!');
				});
			}
		});
};
let initializeQuestions = (employeeRole) => {
	console.log('******** Adding employee ********');

	return inquirer
		.prompt([
			{
				type: 'text',
				name: 'name',
				message: 'What is your name?',
			},
			{
				type: 'number',
				name: 'id',
				message: 'What is your id?',
				
			},
			{
				type: 'text',
				name: 'email',
				message: 'What is your email address?',
				default: () => {},
				validate: function (email) {
					valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

					if (valid) {
						return true;
					} else {
						console.log('Please enter a valid email');
						return false;
					}
				},
			},
		])
		.then((allInfo) => {
			if (employeeRole == 'Engineer') {
				promptEngineer(allInfo, employeeRole);
			} else if (employeeRole == 'Manager') {
				promptManager(allInfo, employeeRole);
			} else if (employeeRole == 'Intern') {
				promptIntern(allInfo, employeeRole);
			}
		});
};

let promptEngineer = (basicInfo, role) => {
	return inquirer
		.prompt({
			type: 'text',
			name: 'github',
			message: 'What is your Github username?',
		
		})
		.then(({ github }) => {
			let engineer = new Engineer(basicInfo.name, basicInfo.id, basicInfo.email, github);
			employeeGen.push(engineer);
			initializePrompt();
			
		});
};
let promptManager = (basicInfo, role) => {
	return inquirer
		.prompt({
			type: 'text',
			name: 'office',
			message: 'What is your office number?',
			
		})
		.then(({ office }) => {
			let manager = new Manager(basicInfo.name, basicInfo.id, basicInfo.email, office);
			employeeGen.push(manager);
			initializePrompt();
		});
};
let promptIntern = (basicInfo, role) => {
	return inquirer
		.prompt({
			type: 'text',
			name: 'school',
			message: 'What school do you attend?',
			
		
		})
		.then(({ school }) => {
			let intern = new Intern(basicInfo.name, basicInfo.id, basicInfo.email, school);
			employeeGen.push(intern);
			initializePrompt();
		});
};
function buildHtml() {
	const html = [];

	function mngrHtml(employee) {
		return `    
		<!-- Manager -->
		<div class="col s4 m4 l4 .center-align">
		<div class="card center-align">
		<div class="blue darken-2 white-text">
	   <div> <h5>${employee.name}</h5></div>
	   <div><i class="material-icons">local_cafe</i><h6>Manager</h6></div>
	   </div>
	   <div>Employee ID: ${employee.id}
	   <div>Email: <a href="mailto:${employee.email}">${employee.email}</a></div>
	   <div>Office number: ${employee.officeNumber}</div>
	  
	   </div>
	</div>
	</div>	
		`;
	}

	function engrHtml(employee) {
		return `<!-- Engineer -->
		
			<div class="col s4 m4 l4 .center-align">
				<div class="card center-align">
				<div class="blue darken-2 white-text">
			   <div> <h5>${employee.name}</h5></div>
			   <div><i class="material-icons">computer</i><h6>Engineer</h6></div>
			   </div>
			   <div>Employee ID: ${employee.id}
			   <div>Email: <a href="mailto:${employee.email}">${employee.email}</a></div>
			   <div>Github: <a href="https://github.com/${employee.github}">${employee.github}</a></div>
			   </div>
			</div>
			</div>
		
		`;
	}

	function intHtml(employee) {
		return `<!-- Intern -->
		<div class="col s4 m4 l4 .center-align">
		<div class="card center-align">
		<div class="blue darken-2 white-text">
	   <div> <h5>${employee.name}</h5></div>
	   <div><i class="material-icons">school</i><h6>Intern</h6></div>
	   </div>
	   <div>Employee ID: ${employee.id}
	   <div>Email: <a href="mailto:${employee.email}">${employee.email}</a></div>
	   <div>School: ${employee.school}</div>
	   </div>
	</div>
	</div>`;
	}

	for (i = 0; i < employeeGen.length; i++) {
		let teamMember = employeeGen[i];
		
		if (teamMember.getRole() === 'Manager') {
			html.push(mngrHtml(teamMember));
		} else if (teamMember.getRole() === 'Engineer') {
			html.push(engrHtml(teamMember));
		} else {
			html.push(intHtml(teamMember));
		}
	}
	return html.join('');
}

function starterHtml() {
	return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <title>Team Profile</title>
</head>
<body>
    <div class=".center-align blue"><h2 style="text-align: center; color: white" class="indigo"">My Team</h2></div>
	
			<div class="row">
				<!-- START-->
	
				${buildHtml()}
				
				<!-- END-->
		
	</body>
	</html>`;
}


initializePrompt();

