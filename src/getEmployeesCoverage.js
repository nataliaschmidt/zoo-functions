const data = require('../data/zoo_data');

const { employees, species } = data; // para usar e retornar todos funcionários

const findNameAndLastname = (obj) => {
  const findEmployee = employees
    .find((employee) => employee.firstName === obj.name
      || employee.lastName === obj.name || employee.id === obj.id);
  const animals = species.filter((specie) => findEmployee.responsibleFor
    .find((animal) => specie.id === animal));
  const locations = animals.map((location) => location.location);
  const animalsNames = species
    .filter((specieName) => findEmployee.responsibleFor
      .find((animalName) => specieName.id === animalName));
  const animalName = animalsNames.map((animName) => animName.name);
  const { id, firstName, lastName } = findEmployee;
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: animalName,
    locations,
  };
};

const allEmployeers = () => {
  const filterAnimals = employees
    .map((employee) => species.filter((specie) => employee.responsibleFor.includes(specie.id)));
  const animalsName = filterAnimals.map((animal) => animal.map((name) => name.name));
  const animalsLocation = filterAnimals
    .map((animalLocation) => animalLocation.map((location) => location.location));

  const allInfos = employees.map((employeeInfo, index) => ({
    id: employeeInfo.id,
    fullName: `${employeeInfo.firstName} ${employeeInfo.lastName}`,
    species: animalsName[index],
    locations: animalsLocation[index],
  }));
  return allInfos;
};

// console.log(allEmployeers());

const findEmployee = (obj) => {
  const check = employees
    .find((employee) => employee.id === obj.id
    || employee.firstName === obj.name || employee.lastName === obj.name);
  return check;
};

// console.log(findEmployee({ id: 'Id inválido' }));

const getEmployeesCoverage = (obj) => {
  if (!obj) {
    return allEmployeers();
  }
  if (findEmployee(obj) === undefined) {
    throw new Error('Informações inválidas');
  }
  return findNameAndLastname(obj);
};

// console.log(getEmployeesCoverage({ id: 'Id inválido' }));

module.exports = getEmployeesCoverage;
