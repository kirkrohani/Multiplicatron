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
  const mutiplyNumbers = new MathOperations().multiply;

  class MultiplyAppManager {
    connectEventHandlers() {
      document.getElementById("calculate_button").addEventListener("click", this.onSubmit.bind(this));
    }

    onSubmit(event) {
      event.preventDefault();
      console.log('User clicked on submit');

      const number1 = parseInt(document.getElementById("number1").value);
      const number2 = parseInt(document.getElementById("number2").value);
      console.log(`number1 ${number1}`);
      console.log(`number2 ${number2}`);
    }
  }
  
  const appManager = new MultiplyAppManager();
  appManager.connectEventHandlers();
});
},{"./MathOperations":1}]},{},[2]);
