const Employee = require('./Employee');

class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email);
		this.github = github;
        this.title = 'Engineer'
	}
	getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getGithub() {
        return this.github
    }
       
    getRole() {
        return this.title
    }
}
module.exports = Engineer;