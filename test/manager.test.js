const Manager = require('../lib/Manager');

// jest.mock('../lib/manager')

test('Get manager info from prompts', () =>{
    const manager = new Manager('Dan', 8989,'dan@mail.com', 43)

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String))
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.getRole()).toBe('Manager');


    
})