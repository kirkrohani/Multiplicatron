const multiply = function(numbers) {
  
  return numbers.reduce( (acc, curr) => acc *= curr, 1);
  
};

//console.log(multiply([1,2,3]));
module.exports = multiply;

