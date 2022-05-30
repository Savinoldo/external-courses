function Calculator() {
  const counter = 0; // eslint-disable-line

  this.add = function (num) { // eslint-disable-line
    if (typeof num === 'number') {
      this.counter += num;
    }
    return this;
  };

  this.subtract = function (num) { // eslint-disable-line
    if (typeof num === 'number') {
      this.counter -= num;
    }
    return this;
  };

  this.divide = function (num) { // eslint-disable-line
    if (typeof num === 'number') {
      this.counter *= num;
    }
    return this;
  };

  this.multiply = function (num) { // eslint-disable-line
    if (typeof num === 'number') {
      this.counter *= num;
    }
    return this;
  };

  this.getResult = function () { // eslint-disable-line
    return this.counter;
  };

  this.reset = function () { // eslint-disable-line
    this.counter = 0;
    return this.counter;
  };

  this.setState = function (num) {  // eslint-disable-line
    if (typeof num === 'number') {
      this.result = num;
    }
    return this;
  };

  this.fetchData = function (cb) { // eslint-disable-line
    const promise = new Promise((resolve) => {
      cb(500);
      resolve(500);
    });
    promise.then((res) => { this.result = res; });
  };
}

const calculator = new Calculator();
module.exports = calculator;
