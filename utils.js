'use strict'

var result = 0;

function exceptionHandling(errorMessage)
{
    alert(`Error : ${errorMessage}`);
}


function performAddition(value1, value2) {
    // Addition Operation
    result = value1 + value2;
    return result;
}

function performSubtraction(value1, value2) {
    // Subtraction Operation
    result = value1 - value2;
    return result;
}

function performMultiplication(value1, value2) {
    // Multiplication Operation
    result = value1 * value2;
    return result;
}

function performDivision(value1, value2) {
    // Division Operation
    if (value2 == 0)
        exceptionHandling("Cannot Divide By Zero");
    else {
        result = value1 / value2;
        return result;
    }
    return result;
}

function performModulus(value1, value2) {
    // Modulus Operation
    if(value2 == 0)
        exceptionHandling("Modulus By 0 Is Undefined");
    else{
        result = value1 % value2;
        return result;
    }    
    return result;   
}

function performExponentiation(value1, value2) {
    // Exponentiation Operation
    result = value1 ** value2;

    if(result != 'Infinity')
        return result
    else{
        exceptionHandling("Input Values Are Too Large.");
    }
    return 0;
}

// Main function for calculation

function calculateResult() {
    const value1 = +(document.getElementById('operand1').value);
    const value2 = +(document.getElementById('operand2').value);
    const opr = document.getElementById('operator').value;
    let finalResult = 0;

    if (Number.isFinite(value1) && Number.isFinite(value2)) {

        if((9007199254740991 >= value1 && -9007199254740991 <= value1) 
        && (9007199254740991 >= value2 && -9007199254740991 <= value2))
        {
            switch (opr) {
                case "Add": {
                    finalResult = performAddition(value1, value2);
                    break;
                }
    
                case "Sub": {
                    finalResult = performSubtraction(value1, value2);
                    break;
                }
    
                case "Mul": {
                    finalResult = performMultiplication(value1, value2);
                    break;
                }
    
                case "Div": {
                    finalResult = performDivision(value1, value2);
                    break;
                }
    
                case "Mod": {
                    finalResult = performModulus(value1, value2);
                    break;
                }
    
                case "Exp": {
                    finalResult = performExponentiation(value1, value2);
                    break;
                }
    
                default:
                    exceptionHandling("Choose A Valid Operation");
                    break;
            }
    
            document.getElementById("result").value = finalResult;
        }
        else
            exceptionHandling("Please Enter A Number In Range +9007199254740991 to -9007199254740991");
    }
    else
        exceptionHandling("Please Enter A Number");

    console.log(finalResult);    
}


