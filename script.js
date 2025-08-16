// Calculator

function addition(a, b){
    return a + b;
}

function subtraction(a, b){
    return a - b;
}

function multiplication(a, b){
    return a * b;
}

function division(a, b){
    return a / b;
}

function operate(num1, operator, num2){
    if(operator == '+') return addition(num1 ,num2);
    if(operator == '-') return subtraction(num1, num2);
    if(operator == '*') return multiplication(num1, num2);
    if(operator == '/') return division(num1, num2);
}

const display = document.querySelector('.display');
let currentInput = '';

function appendTodisplay(item){

    if(/[+\-*/]/.test(item)){
        if(/[+\-*/]$/.test(currentInput)){
            currentInput = currentInput.slice(0, -1) + item;
        }else{
            const tail = currentInput.match(/(-?\d*\.?\d+)([+\-*/])(-?\d*\.?\d+)$/);

            if(tail){
                const num1 = parseFloat(tail[1]);
                const op = tail[2];
                const num2 = parseFloat(tail[3]);
                const res = operate(num1, op, num2);

                currentInput = currentInput.slice(0, currentInput.length - tail[0].length) + String(res) + item;

            }else{
                currentInput += item;
            }          
        }
        display.textContent = currentInput || '0';
        return;
    }

    currentInput += item;
    display.textContent = currentInput || '0';

    
}


function backSpace(){
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || '0';
}

function clearBtn(){
    currentInput = '';
    display.textContent = '0';
}

function calculate(){

    try{

    if(!currentInput) return;

    let expression = /[+\-*/]$/.test(currentInput) ? currentInput.slice(0, -1) : currentInput;

    let parts;

    while((parts = expression.match(/(-?\d*\.?\d+)([+\-*/])(-?\d*\.?\d+)/))){

    const num1 = parseFloat(parts[1]);
    const operator = parts[2];
    const num2 = parseFloat(parts[3]);
    const result = operate(num1, operator, num2);

    expression = expression.replace(parts[0], String(result));
    }

    currentInput = expression;
    display.textContent = currentInput || '0';
    }

    catch(error){
        display.textContent = "ERROR";
        currentInput = '';
    }
}

