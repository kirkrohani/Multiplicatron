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