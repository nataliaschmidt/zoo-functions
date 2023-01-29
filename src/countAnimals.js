const data = require('../data/zoo_data');

const totalAnimals = () => {
  const animals = {};
  data.species.forEach((specie) => {
    animals[specie.name] = specie.residents.length;
  });
  return animals;
};

const findSpecie = (obj) => {
  const findAnimal = data.species.find((specie) => specie.name === obj.species);
  return findAnimal.residents.length;
};

const findSex = (obj) => {
  const animal = data.species.find((specie) => specie.name === obj.species);
  const residentsSex = animal.residents.filter((residentSex) => residentSex.sex === obj.sex);
  return residentsSex.length;
};

const countAnimals = (animal) => {
  if (!animal) {
    return totalAnimals();
  }
  if (animal.sex) {
    return findSex(animal);
  }
  return findSpecie(animal);
};

console.log(countAnimals());

module.exports = countAnimals;
