// const data = require('../data/zoo_data');
// const { species } = data

// const allAnimals = () => {

//   return species.reduce((acc, specie) => {
//     if (!acc[specie.location]) {
//       acc[specie.location] = []
//     }

//     const filterAnimals = species.filter((animal) => {
//       return animal.location === specie.location
//     })
//     const names = filterAnimals.map((name) => {
//       return name.name
//     })

//     acc[specie.location] = names
//     return acc
//   }, {})
// }
// // console.log(allAnimals());

// const includeNames = () => {

//   return species.reduce((acc, specie) => {
//     if (!acc[specie.location]) {
//       acc[specie.location] = []
//     }
// const filterAnimals = species.filter((filterAnimal) => {
//   return filterAnimal.location === specie.location
// })
// const nameAnimals = filterAnimals.map((nameAnimal) => {
//   let obj = {}
//    obj[nameAnimal.name] = nameAnimal.residents.map((resident) => {
// return resident.name
//    })
//    return obj
//   })

//     acc[specie.location] = nameAnimals
//     return acc
//   }, {})
// }

//  // console.log(includeNames());

//  const sortedTrue = () => {
//   return species.reduce((acc, specie) => {
//     if (!acc[specie.location]) {
//       acc[specie.location] = []
//     }
// const filterAnimals = species.filter((filterAnimal) => {
//   return filterAnimal.location === specie.location
// })
// const nameAnimals = filterAnimals.map((nameAnimal) => {
//   let obj = {}
//    obj[nameAnimal.name] = nameAnimal.residents.map((resident) => {
// return resident.name
//    }).sort()
//   //  console.log(obj);
//    return obj
//   })
//     acc[specie.location] = nameAnimals
//     return acc
//   }, {})
//  }

// // console.log(sortedTrue());

// // const teste = sortedTrue()
// // console.log(Object.values(teste)[3]);

// const getAnimalMap = (options) => {
//   if (!options || !options.includeNames) {
//     return allAnimals()
//   }
//   if (options.includeNames === true && options.sorted === true){
//     return sortedTrue()
//   }
// if (options.includeNames === true){
//   return includeNames()
// }

// };

// const teste2 = getAnimalMap({ includeNames: true, sorted: true });

// console.log(Object.values(teste2)[0]);

// module.exports = getAnimalMap;
