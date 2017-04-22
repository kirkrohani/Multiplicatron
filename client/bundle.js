(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
class MathOperations {

  multiply(numbers) {
    return numbers.reduce( (acc, curr) => acc *= curr, 1);
  }
}

module.exports = MathOperations;


},{}],2:[function(require,module,exports){
document.addEventListener("DOMContentLoaded", (event) => {

  const MathOperations = require("./MathOperations");
  const multiplyNumbers = new MathOperations().multiply;
 


  class MultiplyAppManager {

    createInputField(inputFieldsCount) {
      const newInputField = document.createElement("input");
      newInputField.type = "text";
      newInputField.size = "3";

      const newDiv = document.createElement("div");  
      newDiv.id = `number${++inputFieldsCount}`;
      newDiv.appendChild(newInputField);
      
      return newDiv;
    }


    connectEventHandlers() {
      document.getElementById("calculate_button").addEventListener("click", this.onSubmit.bind(this));
      document.getElementById("multiply_more_numbers").addEventListener("click", this.displayMoreInputs.bind(this));
      document.getElementById("turn_off_link").addEventListener("click", this.turnOffBlinking.bind(this));
    }

    turnOffBlinking(event) {
      document.getElementsByClassName("flash")[0].style.animationPlayState = "paused";
    }

    onSubmit(event) {
      event.preventDefault();

      let allInputs = Array.prototype.slice.call(document.querySelectorAll("input"))
        .map( node => parseFloat(node.value) || parseInt(node.value) )  
        .filter( num => !isNaN(num) );
    
      const total = allInputs.length >= 2 ? multiplyNumbers(allInputs) : NaN;
      document.querySelector("#total span").textContent = total; 
    }

    displayMoreInputs(event) {
      event.preventDefault();

      const currentNumberOfInputs = document.querySelectorAll("input").length;
      const parentNode = document.querySelector("#multiply_numbers");
      const referenceNode = document.querySelector("#total");

      parentNode.insertBefore(this.createInputField(currentNumberOfInputs), referenceNode);
    }
  }
  
  const appManager = new MultiplyAppManager();
  appManager.connectEventHandlers();
});
},{"./MathOperations":1}]},{},[2]);
