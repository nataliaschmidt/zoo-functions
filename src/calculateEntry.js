const data = require('../data/zoo_data');

const teste = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

const countEntrants = (entrants) => {
  const child = entrants.filter((entrant) => entrant.age < 18);
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const senior = entrants.filter((entrant) => entrant.age >= 50);
  return {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };
};

const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const peoples = countEntrants(entrants);
  const payChild = peoples.child * data.prices.child;
  const payAdult = peoples.adult * data.prices.adult;
  const paySenior = peoples.senior * data.prices.senior;

  return payChild + payAdult + paySenior;
};

console.log(calculateEntry(teste));

module.exports = { calculateEntry, countEntrants };

// https://programandosolucoes.dev.br/2021/03/02/objeto-vazio-javascript/ -> para verificar se o objeto passado por parâmetro estava vazio.
