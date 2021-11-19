class Employee {
	constructor(name, id, email) {
		this.name = name;
		this.id = id;
		this.email = email;
		this.title = 'Employee'
	}

	getRole() {
		return this.title
	}
}


module.exports = Employee;