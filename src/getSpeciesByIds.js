const data = require('../data/zoo_data');

/// https://www.w3docs.com/learn-javascript/rest-parameters-and-spread-syntax.html#:~:text=The%20rest%20parameter%20gives%20you,how%20it%20can%20be%20defined.
// ... rest parameters "transforma" os parâmetros em um array
const getSpeciesByIds = (...ids) => {
  // console.log(ids);
  if (!ids) return [];
  return ids.map((id) => data.species.find((specie) => specie.id === id));
};

console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
