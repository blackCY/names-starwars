const starWarsNames = require('./starwars-names.json');

const random = () => starWarsNames[(Math.random() * starWarsNames.length) | 0];

// 这个函数没有被用到，他将影响我们的测试覆盖率
// function doSomething() {
//   console.log('hi');
// }

module.exports = {
  all: starWarsNames,
  random,
};
