const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const findAnimal = data.species.find((specie) => specie.name === animal);
  // console.log(findAnimal);

  return findAnimal.residents.every((resident) => resident.age >= age);
};

// retora true se os animais possuirem a mesma idade ou forem mais velhos
// retorna false se os animais forem mais novos
console.log(getAnimalsOlderThan('lions', 2));

module.exports = getAnimalsOlderThan;
