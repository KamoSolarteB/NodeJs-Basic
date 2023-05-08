/* const { number, pokeApi, user} = require('./modules/exampleModule')

console.log(number);
console.log(pokeApi);
console.log(user.name);
console.log(user.email); */

const math = require('./math')

console.log(`Esta es una suma: ${math.add(20, 30)}`);
console.log(`Esta es una resta: ${math.subs(20, 30)}`);
console.log(`Esta es una multiplicacion: ${math.mult(20, 30)}`);
console.log(`Esta es una divicion: ${math.div(20, 30)}`);