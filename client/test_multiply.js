const multiply = require('./multiply.js');

class MultiplyTestSuite {
  
  runTest(testName) {
    console.log(` ${testName} is ${this[testName]()}`);
  }

  runAllTests() {
    let testNames = Object.getOwnPropertyNames(Object.getPrototypeOf(this))
      .filter( propertyName => propertyName.indexOf('test') !== -1 )
      .forEach( func => this.runTest(func) );
    
  }

  assertEquals(num1, num2) {
    return num1 === num2;
  }

  testMultiplyingTwoNumbers() {
    return this.assertEquals(multiply([3,4]), 12);
  }

  testMultiplyingMoreThanTwoNumbers() {
    return this.assertEquals(multiply([1,2,3,4]), 24);
  }

  testMultiplyingMixedNumbers() {
    return this.assertEquals(multiply([1,-2,3,4]), -12);
  }

}

const testSuite = new MultiplyTestSuite();
testSuite.runAllTests();
