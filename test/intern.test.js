const Intern = require('../lib/Intern');

// jest.mock('../lib/intern')

test('Get engineer information based off inquirer prompts', () =>{
    const intern = new Intern('Dan', 8989,'dan@mail.com','Washington State')

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String))
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.getRole()).toBe('Intern');
    
})