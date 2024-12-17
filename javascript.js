//create three variable
let num1 = null;
let num2 = null;
let operator = null;
let displayValue = "";

//create operation func
function operation (num1, num2, operator){
    if (operator === "+"){
        return add(num1, num2);
    }
    if (operator === "-"){
        return subtract(num1, num2);
    }
    if (operator === "*"){
        return multiply(num1, num2);
    }
    if (operator === "/"){
        return divide(num1, num2);
    }
    return null;
}


//basic math operator
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

//function to update display
function updateDisplay(){
    const display = document.querySelector(".display");
    display.textContent = displayValue;
}

// Function to handle button clicks
function handleButtonClick(event) {
    //if 
}

// Add event listeners to buttons

