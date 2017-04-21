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