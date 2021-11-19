const Employee = require('./Employee');

class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email);
		this.title = 'Intern'
		this.school = school;
	}

	getRole() {
        return this.title
    }
}
module.exports = Intern;