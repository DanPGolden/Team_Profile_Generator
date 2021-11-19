const Manager = require('../lib/Manager');

// jest.mock('../lib/manager')

test('Get manager information based off inquirer prompts', () =>{
    const manager = new Manager('Lexie', 4325,'lex@gmail.com', 3631977)

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String))
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.getRole()).toBe('Manager');


    
})