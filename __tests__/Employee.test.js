// Import Employee class with require()
const Employee = require('../lib/Employee');
// Test instantiate Employee instance
test("ruochen", () => {
  const employeeInstance= new Employee();
  expect(typeof(employeeInstance)).toBe('object');
  });

// Test setting name of an employee
test("name", () => {
  const name ='ruochen'; 
  const employeeInstance = new Employee(name);
  expect(employeeInstance.name).toBe(name);
});

// Test setting id of an employee
test("id", () => {
  const id = 110;
  const employeeInstance = new Employee(id);
  expect(employeeInstance.id()).toBe(id);
});

// Test setting email of an employee
test("email", () => {
  const email= 'ruochen@test.com';
  const employeeInstance= new Employee(email);
  expect (employeeInstance.email()).toBe(email);
});

// Test get name method
test("getName", () => {
  const testName= 'ruochen';
  const employeeInstance= new Employee(testName);
  expect (employeeInstance.getName()).toBe(testName);
});

// Test get id method
test("getId", () => {
  const testId = 110;
  const employeeInstance =new Employee('ruochen',110);
  expect (employeeInstance.getId()).toBe(testId);
});

// Test get email method
test("getEmail", () => {
  const testEmail = 'ruochen@test.com';
  const employeeInstance = new Employee ('ruochen', 110, 'ruochen@test.com');
  expect (employeeInstance.getEmail()).toBe(testEmail);
});

// Test get role method
test("getRole", () => {
  const testRole = 'Employee';
  const employeeInstance = new Employee ('ruochen', 110, 'ruochen@test.com');
  expect (employeeInstance.getRole()).toBe(testRole);
});
