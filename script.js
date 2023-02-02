let memory = [];
let num1;
let num2;
let operator = "";
let newInput = true;

const numberButtons = document.querySelectorAll('num');
const operatorButtons = document.querySelectorAll('operator');


function getPanelValue(){
    return document.getElementById('resultpanel').value;
}

function setPanelValue(value){
    document.getElementById('resultpanel').value = value;
}

function getsecondaryPanelValue(){
    return document.getElementById('entrypanel').value;
}

function setsecondaryPanelValue(value){
    document.getElementById('entrypanel').value = value;
}

function typeNum(e){
    //function for inputting values
    let panel = getPanelValue();
    let num = e.innerText;

    if(newInput){
        setPanelValue(num);
        newInput = false;
    }else{
        if(panel.length <= 6){
            setPanelValue(getPanelValue() + num);
        }
    }
}

function deleteNum(){
    //deleting inputted numbers
    let panel = getPanelValue();
    let len = panel.length;
    if(panel.match(/\-/g)){
        if(len>2){
            setPanelValue(panel.slice(0,-1));
        }else{
            setPanelValue('0')
            newInput = true;
        }
    }
    else if(!panel.match(/\-/g) == len > 1){
        setPanelValue(panel.slice(0,-1));
    }else{
        setPanelValue('0');
        newInput = true;
    }
}

function clearNum(){
    //clearing panels
    setPanelValue('0');
    setsecondaryPanelValue('');
    memory = 0;
    operator = "";
    newInput = true;
}

function negateNum(){
    //negating a num
    let num = getPanelValue();
    setPanelValue(num / -1);
}

function decimalPoint(e){
    //adding decimal point
    let panel = getPanelValue();
    let dot = e.innerText;
    if(!panel.match(/\./g)){
        setPanelValue(getPanelValue() + dot);
    }
}

function captureData(e){
    //clicking an operand
    num1 = getPanelValue();
    operator = e.innerText;
    if(!newInput){
        newInput = true;
    }else{
        setsecondaryPanelValue(num1+operator);
    }
    setsecondaryPanelValue(num1+operator);
}

function operate(){
    //equal should be clicked once
    let num2 = getPanelValue();
    if(!newInput){
        setsecondaryPanelValue(getsecondaryPanelValue()+num2);
        switch (operator){
            case '+':
                setsecondaryPanelValue(getsecondaryPanelValue());
                result = Number(num1) + Number(num2);
                setPanelValue(result);
                num1 = result;
                newInput = true;
                break;
            case '-':
                setsecondaryPanelValue(getsecondaryPanelValue());
                result = Number(num1) - Number(num2);
                setPanelValue(result);
                num1 = result;
                newInput = true;
                break;
            case 'x':
                setsecondaryPanelValue(getsecondaryPanelValue());
                result = Number(num1) * Number(num2);
                setPanelValue(result);
                num1 = result;
                newInput = true;
                break;
            case '/':
                setsecondaryPanelValue(getsecondaryPanelValue());
                if(num2 != 0){
                    result = Number(num1) / Number(num2);
                    setPanelValue(result);
                    num1 = result;
                    newInput = true;
                }else{
                    setPanelValue("error");
                    newInput = true;
                }
                break;
        }
    }else if(newInput){

    }
}





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