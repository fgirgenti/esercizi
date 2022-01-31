const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys
let i = 0;
for (let value in person) {
  console.log(Object.keys(person)[i] + ' ' + person[value]); 
  i++
}
