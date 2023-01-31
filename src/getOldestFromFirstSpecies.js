const data = require('../data/zoo_data');

const { employees, species } = data;

const findEmployees = (id) => employees.find((employee) => employee.id === id);

const getOldestFromFirstSpecies = (id) => {
  const employee = findEmployees(id);
  const responsiveFor = employee.responsibleFor.map((responsible) => responsible);
  const animals = species.find((animal) => animal.id === responsiveFor[0]);
  const olderAnimal = animals.residents
    .reduce((acc, animalResident) => (acc.age > animalResident.age ? acc : animalResident));
  const { name, sex, age } = olderAnimal;
  return [name, sex, age];
};

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
