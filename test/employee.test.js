const Employee = require('../lib/Employee');

// jest.mock('../lib/Employee')

test('Get employee information based off inquirer prompts', () =>{

    const employee = new Employee('Lexie', 4325,'lex@gmail.com', 'Employee')


    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String))
    expect(employee.getRole()).toBe('Employee');

})