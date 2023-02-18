


//need to fix
//digit limits shouldn't include sign or decimal point - (design)
//long decimal point should round up depends on digit limit - (design)
//problems with equals, it should calculate the last operand used and number inputted - (function)
//User interface - (design)
//pressing equal simultaneously duplicates the number entered and appends to panel2 - (design)
//keymapping - (design)
//should be able to calculate a previous operation when clicking an operand - (function)



//IDEA:
//inputting a number ticks the boolean true, if not false
//clicking an operand reverts the boolean to false and capture the type of operand
//clicking equals validates the boolean if true or false
//if true get new input as num2 if false use the last inputted number
//calculate
//sets the result as num1

class Calculator {
    constructor(previousOperandPanel, currentOperandPanel){
        this.previousOperandPanel = previousOperandPanel;
        this.currentOperandPanel = currentOperandPanel;
        this.clear();
    }

    clear(){
        this.previousOperand = '';
        this.currentOperand = '';
        this.operator = undefined;
    }
    
    appendNumber(number){
        this.currentOperand = number;
        console.log("add");
    }
    
    delete(){

    }

    clearEntry(){

    }

    negate(){

    }

    chooseOperator(operator){

    }

    compute(){

    }

    updateDisplay(){
        this.currentOperandPanel.innerText = this.currentOperand;
    }
}



const numberButton = document.querySelectorAll('[data-number]');
const operatorButton = document.querySelectorAll('[data-operator]');
const equalButton = document.querySelector('[data-equals]');
const negateButton = document.querySelector('[data-negate]');
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
const clearEntryButton = document.querySelector('[data-clear-entry]');
const currentOperandPanel = document.querySelector('[data-current-operand]');
const previousOperandPanel = document.querySelector('[data-previous-operand]');

const calculator = new Calculator(previousOperandPanel, currentOperandPanel);

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
});