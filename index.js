const person = require('./person');

console.log('person: ', person);

const greet = (e) => {
    console.log(`I'm ${e.name} and I'm ${e.age} years old.`)
}

greet(person);