const numberButtons = document.querySelectorAll('[data-number]');
const operatorButton = document.querySelectorAll('button[data-operator]');
const equalButton = document.querySelector('button[data-equals]');
const negateButton = document.querySelector('button[data-negate]');
const clearButton = document.querySelector('button[data-clear]');
const deleteButton = document.querySelector('button[data-delete]');
const clearEntryButton = document.querySelector('button[data-clear-entry]');
const currentOperandPanel = document.querySelector('[data-currentops]');
const previousOperandPanel = document.querySelector('div[data-prevops]');

console.log(currentOperandPanel.textContent);

numberButtons.forEach(buttons => {
    buttons.addEventListener("click", ()=> {
        currentOperandPanel.innerText += buttons.textContent;
    })
})