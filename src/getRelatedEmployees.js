const data = require('../data/zoo_data');

const isManager = (id) => {
  const managed = data.employees.some((employee) => employee.managers.includes(id));
  return managed;
};

console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

const getRelatedEmployees = (managerId) => {
  const employeeManager = [];
  if (isManager(managerId)) {
    const manager = data.employees.filter((employe) => employe.managers.includes(managerId));
    manager.forEach((managerPerson) => {
      employeeManager.push(`${managerPerson.firstName} ${managerPerson.lastName}`);
    });
    return employeeManager;
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
