function calculate() {
  let calc = {
    result: 0,

    add: function (n) {
      this.result += n;
      return this;
    },
    
    multiply: function (n) {
      this.result *= n;
      return this;
    },

    sub: function (n) {
      this.result -= n;
      return this;
    },

    divide: function (n) {
      this.result /= n;
      return this;
    },

    printResult: function() {
      console.log(this.result)
    }
  }
  return calc;
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7
