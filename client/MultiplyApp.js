document.addEventListener("DOMContentLoaded", (event) => {
  console.log('At the beginning of MultiplyApp.js');

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
    }


    onSubmit(event) {
      event.preventDefault();
      console.log('User clicked on submit');

      let allInputs = Array.prototype.slice.call(document.querySelectorAll("input"))
        .map( node => parseInt(node.value) )  
        .filter( num => !isNaN(num) );
    
      const total = allInputs.length >= 2 ? multiplyNumbers(allInputs) : NaN;
      document.querySelector("#total span").textContent = total;
      
    }

    displayMoreInputs(event) {
      event.preventDefault();
      console.log('User clicked on more inputs');

      const currentNumberOfInputs = document.querySelectorAll("input").length;
      const parentNode = document.querySelector("#multiply_numbers");
      const referenceNode = document.querySelector("#total");

      parentNode.insertBefore(this.createInputField(currentNumberOfInputs), referenceNode);
      
    }
  }
  
  const appManager = new MultiplyAppManager();
  appManager.connectEventHandlers();
});