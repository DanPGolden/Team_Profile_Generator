const Engineer = require('../lib/Engineer');

// jest.mock('../lib/engineer')

test('Get engineer information based off inquirer prompts', () =>{
    const engineer = new Engineer('Lexie', 4325,'lex@gmail.com','lexcraw4d','Engineer')

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String))
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.getRole()).toBe('Engineer');

})