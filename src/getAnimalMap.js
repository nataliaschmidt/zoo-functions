const data = require('../data/zoo_data');

const { species } = data;

const allAnimals = () => species.reduce((acc, specie) => {
  if (!acc[specie.location]) {
    acc[specie.location] = [];
  }

  const filterAnimals = species.filter((animal) => animal.location === specie.location);
  const names = filterAnimals.map((name) => name.name);

  acc[specie.location] = names;
  return acc;
}, {});
// console.log(allAnimals());

const includeNames = () => species.reduce((acc, specie) => {
  if (!acc[specie.location]) {
    acc[specie.location] = [];
  }
  const filterAnimals = species.filter((filterAnimal) => filterAnimal.location === specie.location);
  const nameAnimals = filterAnimals.map((nameAnimal) => {
    const obj = {};
    obj[nameAnimal.name] = nameAnimal.residents.map((resident) => resident.name);
    return obj;
  });

  acc[specie.location] = nameAnimals;
  return acc;
}, {});

// console.log(includeNames());

const sortedTrue = () => species.reduce((acc, specie) => {
  if (!acc[specie.location]) {
    acc[specie.location] = [];
  }
  const filterAnimals = species.filter((filterAnimal) => filterAnimal.location === specie.location);
  const nameAnimals = filterAnimals.map((nameAnimal) => {
    const obj = {};
    obj[nameAnimal.name] = nameAnimal.residents.map((resident) => resident.name).sort();
    //  console.log(obj);
    return obj;
  });
  acc[specie.location] = nameAnimals;
  return acc;
}, {});

// console.log(sortedTrue());

// const teste = sortedTrue()
// console.log(Object.values(teste)[3]);

const NameAndSex = (objeto) => species.reduce((acc, specie) => {
  if (!acc[specie.location]) {
    acc[specie.location] = [];
  }
  const filterAnimals = species.filter((filterAnimal) => filterAnimal.location === specie.location);
  const nameAnimals = filterAnimals.map((nameAnimal) => {
    const obj = {};
    obj[nameAnimal.name] = nameAnimal.residents.reduce((acc1, resident) => {
      if (resident.sex === objeto.sex) {
        acc1.push(resident.name);
      }
      return acc1;
    }, []);
    return obj;
  });

  acc[specie.location] = nameAnimals;
  return acc;
}, {});

// const teste = NameAndSex({ includeNames: true, sex: 'female' });
// console.log(Object.values(teste)[0]);

const NameAndSexAndSort = (objeto) => species.reduce((acc, specie) => {
  if (!acc[specie.location]) {
    acc[specie.location] = [];
  }
  const filterAnimals = species.filter((filterAnimal) => filterAnimal.location === specie.location);
  const nameAnimals = filterAnimals.map((nameAnimal) => {
    const obj = {};
    obj[nameAnimal.name] = nameAnimal.residents.reduce((acc2, resident) => {
      if (resident.sex === objeto.sex) {
        acc2.push(resident.name);
      }
      return acc2;
    }, []).sort();
    return obj;
  });

  acc[specie.location] = nameAnimals;
  return acc;
}, {});

const refactoringIf = (options) => {
  if (options.sex) {
    if (options.sorted) {
      return NameAndSexAndSort(options);
    }
    return NameAndSex(options);
  }
  if (options.sorted) {
    return sortedTrue();
  }
  return includeNames();
};

const getAnimalMap = (options) => {
  if (!options || !options.includeNames) {
    return allAnimals();
  }
  return refactoringIf(options);
};

// const teste2 = getAnimalMap({ includeNames: true, sex: 'female', sorted: true });

// console.log(Object.values(teste2)[0]);

module.exports = getAnimalMap;

// if (!options || !options.includeNames) {
//   return allAnimals();
// }
// if (!options.sorted && !options.sex) {
//   return includeNames();
// }
// if (options.sorted && !options.sex) {
//   return sortedTrue();
// }
// if (!options.sorted && options.sex) {
//   return NameAndSex(options);
// }
// if (options.sorted && options.sex) {
//   return NameAndSexAndSort(options);
// }
