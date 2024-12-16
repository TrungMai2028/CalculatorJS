//create three variable
let num1 = 0;
let num2 = 0;
let operator = "";

//create operation func
function operation (num1, num2, operator){
    if (operator === "+"){
        add(num1, num2);
    }
    if (operator === "-"){
        subtract(num1, num2);
    }
    if (operator === "*"){
        multiply(num1, num2);
    }
    if (operator === "/"){
        divide(num1, num2);
    }
}


//basic math operator
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;