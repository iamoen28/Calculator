//1. start inputting number to textfield by clicking the buttons
//2. next program the operands
//      by clicking any operands, it needs to capture the current value
//      on the text field and calculate to next input

//psuedocode
//user enters number/s
//user select operand
//text field capture the current value and resets the text field
//user enter number/s
//clicking equals solves the equation

//calculate(n1, operands, n2)
//switch (operands) case + - * 
let memory = 0;

function getPanelValue(){
    return document.getElementById('resultpanel').value;
}

function setPanelValue(value){
    document.getElementById('resultpanel').value = value;
}

function typeNum(e){
    //get current input value
    let panel = getPanelValue();
    let num = e.innerText;
    if(panel.length == 7){//if has decimal point or sign
        console.log(panel.length);
    }else if(panel == '0'){
        setPanelValue(num);
    }else{
        setPanelValue(getPanelValue() + num);
    }
}

function deleteNum(){
    let panel = getPanelValue();
    if(panel.length > 1){
        setPanelValue(panel.slice(0,-1));
    }else{
        setPanelValue('0');
    }
}

function clearNum(){
    setPanelValue('0');
    memory = 0;
}

function negateNum(){
    let num = getPanelValue();
    setPanelValue(num / -1);
}

function decimalPoint(e){
    let panel = getPanelValue();
    let dot = e.innerText;
    if(!panel.match(/\./g)){
        setPanelValue(getPanelValue() + dot);
    }
}

function calculate(operator){
    let result;
    if (memory == 0){
        memory = Number(getPanelValue());//memory
        setPanelValue('0');
    }else{
        let num = Number(getPanelValue());
        switch (operator.innerText){
            case '+':
                result = memory + num;
                memory = num;
                setPanelValue(result);
                break;
            case '-':
                break;
            case 'x':
                break;
            case '/':
                break;
        }
    }
}