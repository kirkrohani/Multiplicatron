(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
class MathOperations {

  multiply(numbers) {
    return numbers.reduce( (acc, curr) => acc *= curr, 1);
  }
}

module.exports = MathOperations;


},{}],2:[function(require,module,exports){
document.addEventListener("DOMContentLoaded", (event) => {
  console.log('At the beginning of MultiplyApp.js');

  const MathOperations = require("./MathOperations");
  const multiplyNumbers = new MathOperations().multiply;
 


  class MultiplyAppManager {

    createInputField(inputFieldsCount) {
      
      let newInputField = document.createElement("input");
      newInputField.type = "text";
      newInputField.size = "3";

      let newDiv = document.createElement("div");  
      newDiv.id = `number${++inputFieldsCount}`;

      let newLabel = document.createElement("label");
      newLabel.textContent = "Enter a number ";

      newDiv.appendChild(newLabel);
      newDiv.appendChild(newInputField);
      
      return newDiv;
    }


    connectEventHandlers() {
      document.getElementById("calculate_button").addEventListener("click", this.onSubmit.bind(this));
      document.getElementById("multiply_more_numbers").addEventListener("click", this.displayMoreInputs.bind(this));
    }


    onSubmit(event) {
      event.preventDefault();
      console.log('User clicked on submit');

      const number1 = parseInt(document.querySelector("#number1 input").value);
      const number2 = parseInt(document.querySelector("#number2 input").value);

      document.querySelector("#total span").textContent = multiplyNumbers([number1, number2]);
      
    }

    displayMoreInputs(event) {
      event.preventDefault();
      console.log('User clicked on more inputs');

      let currentNumberOfInputs = document.querySelectorAll("input").length;
      console.log(`currentNumberOfInputs ${currentNumberOfInputs}`);
      let parentNode = document.querySelector("#multiply_numbers");
      let referenceNode = document.querySelector("#total");
      parentNode.insertBefore(this.createInputField(currentNumberOfInputs), referenceNode);
      
    }
  }
  
  const appManager = new MultiplyAppManager();
  appManager.connectEventHandlers();
});
},{"./MathOperations":1}]},{},[2]);
