const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Daniel', 01, 'danielperezgarnic@gmail.com', 'Daniel-PeGa');
    expect(engineer.github).toEqual(expect.any(String));
});

test('gets the Engineers github', () => {
    const engineer = new Engineer('Daniel', 01, 'danielperezgarnic@gmail.com', 'Daniel-PeGa');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets employees role', () => {
    const engineer = new Engineer('Daniel', 01, 'danielperezgarnic@gmail.com', 'Daniel-PeGa');
    expect(engineer.getRole()).toEqual("Engineer");
});