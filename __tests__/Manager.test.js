const Manager = require('../lib/Manager');

test('creates the Manager object', () => {
    cont manager = new Manager('Daniel', 03, 'danielperezgarnic@yahoo.com', 6292395033);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets the employees role', () => {
    cont manager = new Manager('Daniel', 03, 'danielperezgarnic@yahoo.com', 6292395033);
    expect(manager.getRole()).toEqual("Manager");
});