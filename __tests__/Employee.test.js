const Emmployee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Emmployee('Christian', 05, 'christianNodal@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Christian', 05, 'christianNodal@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employees id', () => {
    const employee = new Emmployee('Christian', 05, 'christianNodal@gmail.com');
    expect(emplpoyee.getId()).toEqual(expect.any(Number));
});

test('gets employees email address', () => {
    const employee = new Emmployee('Christian', 05, 'christianNodal@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets employees role', () => {
    const employee = new Emmployee('Christian', 05, 'christianNodal@gmail.com');
    expect(employee.getRole()).toEqual("Employee");
});