// Calculator

let initial;
let final;
let operator;

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

function operate(num1, argument, num2){
    if(argument == '+') return addition(num1 ,num2);
    if(argument == '-') return subtraction(num1, num2);
    if(argument == '*') return multiplication(num1, num2);
    if(argument == '+') return division(num1, num2);
}