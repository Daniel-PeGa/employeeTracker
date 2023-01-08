const Intern = require('../lib/Intern');

test('creates the Intern object', () => {
    const intern = new Intern('Jose', 02, 'joseJose@gmail.com', 'Ibero');
    expect(intern.school).toEqual(expect.any(String));
});

test('gets the Interns school', () => {
    const intern = new Intern('Jose', 02, 'joseJose@gmail.com', 'Ibero');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets employees role', () => {
    const intern = new Intern('Jose', 02, 'joseJose@gmail.com', 'Ibero');
    expect(intern.getRole()).toEqual("Intern");
});
