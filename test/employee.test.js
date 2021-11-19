const Employee = require('../lib/Employee');

// jest.mock('../lib/Employee')

test('Get info off prompts', () =>{

    const employee = new Employee('Dan', 8989,'Dan@mail.com', 'Employee')


    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String))
    expect(employee.getRole()).toBe('Employee');

})