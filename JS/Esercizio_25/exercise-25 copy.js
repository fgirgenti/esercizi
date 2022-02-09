const person = {
  // get firstName() {
  //   return this.firstName;
  // }
  // get lastName() {
  //   return this.lastName;
  // }
  function fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const john = new person ()
console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins