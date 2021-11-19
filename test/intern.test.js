const Intern = require('../lib/Intern');

// jest.mock('../lib/intern')

test('Get engineer information based off inquirer prompts', () =>{
    const intern = new Intern('Lexie', 4325,'lex@gmail.com','South Carolina')

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String))
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.getRole()).toBe('Intern');
    
})