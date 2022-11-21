let memory = [];

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
    let len = panel.length;
    if(panel.match(/\-/g)){
        if(len>2){
            setPanelValue(panel.slice(0,-1));
        }else{
            setPanelValue('0')
        }
    }
    else if(!panel.match(/\-/g) == len > 1){
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

function captureData(e){
    memory = [getPanelValue(), e.innerText];
    setPanelValue('0');
}

function operate(){
    let num1 = Number(memory[0]);
    let num2 = Number(getPanelValue());
    let operator = memory[1];
    switch (operator){
        case '+':
            result = num1 + num2;
            setPanelValue(result);
            memory[0] = num2;
            break;
        case '-':
            result = num1 - num2;
            setPanelValue(result);
            memory[0] = num2;
            break;
        case 'x':
            result = num1 * num2;
            setPanelValue(result);
            memory[0] = num2;
            break;
        case '/':
            if(num2 != 0){
                result = num1 / num2;
                setPanelValue(result);
                memory[0] = num2;
            }else{
                setPanelValue("error");
            }
            break;
    }
}

//some bugs
//digit limits shouldn't include sign or decimal point
//long decimal point should round up depends on digit limit
//problems with equals
//w