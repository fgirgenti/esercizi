function getKeys(obj) {
  let temp = [];
  for (let key in obj) {
    temp.push(key);
  }
  return temp;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);