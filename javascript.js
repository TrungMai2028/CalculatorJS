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
    //if user enter a number display, if not don't
    if (!isNaN(value)){
        displayValue += value;
        updateDisplay();
    }
    else if (value === "+", value === "-", value === "*", value === "/"){
        //if num1 = null, set num1 to displayValue and operator to value
        if (num1 == null){
            num1 = displayValue;
            operator = value;
            displayValue = "";
        }
        // if there is already num1, set to
        else if (operator){
            num2 = displayValue;
            num1 = operation(num1, num2, operator);
            operator = value; 
            displayValue = "";
            updateDisplay();
        }
    }
    else if (value === "="){
        if (num1 !== null, num2 !== null, operator !== null){
            num2 = displayValue;
            displayValue = operation(num1, num2, operator);
            num1 = null;
            num2 = null;
            operator = null;
            updateDisplay();
        }
    }
    else if (value === "clear"){
        num1 = null;
        num2 = null;
        operator = null;
        displayValue = null;
        updateDisplay();
    }
}

// Add event listeners to buttons
const buttons = document.querySelector("button");
buttons.forEach(button => button.addEventListener("click", handleButtonClick));
