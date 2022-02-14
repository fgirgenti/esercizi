const person = {
  firstName:"",
  lastName:"",

  get getfirstName() {
    return `${this.firstName}`
  },

  set setfirstName(firstName) {
    this.firstName = firstName;
  },

  get getlastName() {
    return `${this.lastName}`
  },

  set setlastName(lastName) {
    this.lastName = lastName;
  },

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const john = person;
const simon = john;
john.setfirstName = "John";
john.setlastName = "Doe";
simon.setfirstName = "Simon";
simon.setlastName = "Collins";

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins