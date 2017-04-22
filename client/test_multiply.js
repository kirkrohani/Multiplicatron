const MathOperations = require('./MathOperations');
const multiplyNumbers = new MathOperations().multiply;

class MultiplyTestSuite {
  
  runTest(testName) {
    console.log(` ${testName} is ${this[testName]()}`);
  }

  runAllTests() {
    Object.getOwnPropertyNames(Object.getPrototypeOf(this))
      .filter( propertyName => propertyName.indexOf('test') !== -1 )
      .forEach( func => this.runTest(func) );
    
  }

  assertEquals(num1, num2) {
    return num1 === num2;
  }

  assertObjectEquals(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

  testMultiplyingTwoNumbers() {
    return this.assertEquals(multiplyNumbers([3,4]), 12);
  }

  testMultiplyingMoreThanTwoNumbers() {
    return this.assertEquals(multiplyNumbers([1,2,3,4]), 24);
  }

  testMultiplyingMixedNumbers() {
    return this.assertEquals(multiplyNumbers([1,-2,3,4]), -24);
  }

  testMultiplyingNaN() {
    return this.assertObjectEquals(multiplyNumbers([3,5,NaN]), NaN);
  }

}

const testSuite = new MultiplyTestSuite();
testSuite.runAllTests();
