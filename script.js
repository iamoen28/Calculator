class Calculator{
    constructor(currentOperandPanel, previousOperandPanel){
        this.currentOperandPanel = currentOperandPanel;
        this.previousOperandPanel = previousOperandPanel;
        this.clear();
    }
    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operator = undefined;
    }
    clearEntry(){
        this.currentOperand = '';
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
    negate(){
        this.currentOperand = this.currentOperand/-1;
    }
    appendNum(num){
        if(num === '.' && this.currentOperand.includes('.')) return;
        if(this.currentOperand.length != 14){
            this.currentOperand += num;
        }
    }
    selectOperator(operator){
        if(this.currentOperand === '') return;
        if(this.previousOperand !== ''){
            this.compute();
        }
        this.operator = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';

    }
    compute(){
        let result;
        const prevNum = parseFloat(this.previousOperand);
        const currentNum = parseFloat(this.currentOperand);
        if(isNaN(prevNum) || isNaN(currentNum)) return;
        switch(this.operator){
            case '+':
                result = prevNum + currentNum;
                break;
            case '-':
                result = prevNum - currentNum;
                break;
            case '÷':
                result = prevNum / currentNum;
                break;
            case 'x':
                result = prevNum * currentNum;
                break;
            default:
                return;
        }
        this.currentOperand = result;
        this.operator = undefined;
        this.previousOperand = '';
    }
    formatDisplay(number){
        const stringNum = number.toString();
        const integerNum = parseFloat(stringNum.split('.')[0]);
        const decimalNum = stringNum.split('.')[1];
        let formattedNum;
        if(isNaN(integerNum)){
            formattedNum = '';
        }else{
            formattedNum = integerNum.toLocaleString('en', {maximumFractionDigits: 0});
        }
        if(decimalNum != null){
            return `${formattedNum}.${decimalNum}`;
        }else{
            return formattedNum;
        }
    }
    updateDisplay(){
        this.currentOperandPanel.textContent = this.formatDisplay(this.currentOperand);
        if(this.operator != null){
            this.previousOperandPanel.textContent = `${this.formatDisplay(this.previousOperand)} ${this.operator}`;
        }else{
            this.previousOperandPanel.textContent = this.formatDisplay(this.previousOperand);
        }
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButton = document.querySelectorAll('button[data-operator]');
const equalButton = document.querySelector('button[data-equals]');
const negateButton = document.querySelector('button[data-negate]');
const clearButton = document.querySelector('button[data-clear]');
const deleteButton = document.querySelector('button[data-delete]');
const clearEntryButton = document.querySelector('button[data-clear-entry]');
const currentOperandPanel = document.querySelector('[data-currentops]');
const previousOperandPanel = document.querySelector('div[data-prevops]');

const calculator = new Calculator(currentOperandPanel, previousOperandPanel);

numberButtons.forEach(buttons => {
    buttons.addEventListener("click", ()=> {
        calculator.appendNum(buttons.textContent);
        calculator.updateDisplay();
    })
})

operatorButton.forEach(buttons => {
    buttons.addEventListener("click", ()=> {
        calculator.selectOperator(buttons.textContent);
        calculator.updateDisplay();
    })
})

negateButton.addEventListener('click', ()=> {
    calculator.negate();
    calculator.updateDisplay();
})

equalButton.addEventListener('click', ()=> {
    calculator.compute();
    calculator.updateDisplay();
})

clearButton.addEventListener('click', ()=> {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', ()=> {
    calculator.delete();
    calculator.updateDisplay();
})
clearEntryButton.addEventListener('click', ()=> {
    calculator.clearEntry();
    calculator.updateDisplay();
})