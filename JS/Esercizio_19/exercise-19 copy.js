const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"
person2.firstName = 'Simon'

//viene modificato anche l'oggetto 1 perché non è stato passato solo il valore all'oggetto 2 ma il riferimento, quindi i 2 oggetti puntano alla stessa allocazione di memoria/sono lo stesso oggetto

console.log(person1);
console.log(person2);