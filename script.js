let firstNumber = document.getElementById("first-number");
let operator = document.getElementById("operator");
let secondNumber = document.getElementById("second-number");
let getResult = document.getElementById("get-result");
let resultArea = document.getElementById("result-area");
let clear = document.getElementById("clear");


function fun() {
    let num1 = parseFloat(firstNumber.value); // Get the value of the first number and convert it to a float
    let num2 = parseFloat(secondNumber.value); // Get the value of the second number and convert it to a float
    let op = operator.value; // Get the operator value

    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers";
    }else {
        switch (op) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 == 0) {
                    result = "Cannot divide by zero"
                }else {
                    result = num1 / num2;
                }
                break;
        
            default:
                result = "Select Operator"
                break;
        }
    }

    resultArea.innerHTML = result;
}

getResult.addEventListener("click", fun);

clear.addEventListener("click", () => {
    firstNumber.value = 0;
    secondNumber.value = 0;
    operator.value = "null";
    resultArea.innerHTML = "Result Area Cleared";
})



