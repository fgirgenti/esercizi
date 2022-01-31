const person = {
  firstName: 'John',
  lastName: 'Doe'
};

console.log(person.address?.city); 
if (person.fullName) {
  console.log(person.fullName()); 
}