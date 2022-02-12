const starWarsNames = require('./starwars-names.json');

const random = () => starWarsNames[(Math.random() * starWarsNames.length) | 0];

module.exports = {
  all: starWarsNames,
  random,
};
