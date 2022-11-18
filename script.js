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

function typeNum(e){
    //get current input value
    let panel = document.getElementById('resultpanel').value;
    if(panel == '0'){
        document.getElementById('resultpanel').value = e.innerText;
    }else{
        document.getElementById('resultpanel').value += e.innerText;
    }
}

function deleteNum(){
    let panel = document.getElementById('resultpanel').value;
    if(panel.length > 1){
    document.getElementById('resultpanel').value = panel.slice(0,-1);
    }else{
        document.getElementById('resultpanel').value = '0';
    }
}