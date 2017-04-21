class MathOperations {

  multiply(numbers) {
    return numbers.reduce( (acc, curr) => acc *= curr, 1);
  }
}

module.exports = MathOperations;

