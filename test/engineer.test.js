const Engineer = require('../lib/Engineer');

// jest.mock('../lib/engineer')

test('Get engineer info from prompts', () =>{
    const engineer = new Engineer('Dan', 8989,'dan@mail.com','danpgolden','Engineer')

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String))
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.getRole()).toBe('Engineer');

})