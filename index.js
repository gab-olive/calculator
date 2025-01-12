function add(n1,n2){
    return n1+n2
}
function subtract(n1,n2){
    return n1-n2
}
function multiply(n1,n2){
    return n1*n2
}
function divide(n1,n2){
    return n1/n2
}

function operate(operator,n1,n2) {
    if (operator == "+"){
        return add(n1,n2)
    }
    else if (operator == "-"){
        return subtract(n1,n2)
    }
    else if (operator == "*"){
        return multiply(n1,n2)
    }
    else if (operator == "/"){
        return divide(n1,n2)
    }
}

const buttons = document.querySelectorAll("button")
const display = document.querySelector(".display")

let operands = ['+','-','*','/']
let nums = ['0','1','2','3','4','5','6','7','8','9']
let operation = []

function getOperand(operation) {
    return operation.filter(char => operands.includes(char));
}


buttons.forEach((button) =>{
    
    button.addEventListener('click', () => {
    let buttonText = button.textContent
    let displayValue = display.getAttribute("value");

    if (nums.includes(buttonText)){
    display.setAttribute("value", displayValue + buttonText)}

    operation.push(buttonText)
    let operand_list = getOperand(operation);
    let operand = operand_list[0]
    let operandIndex = operation.indexOf(operand)
    let n1 = parseInt(operation.slice(0, operandIndex).join(''))
    let n2 = parseInt(operation.slice(operandIndex + 1) .join(''))
    console.log('n1: ' + n1)
    console.log('n2: ' + n2)
    console.log('operand:' + operand)
    const last = operation[operation.length-1]
    const last2 = operation[operation.length-2]
    console.log('last: ' + last)
    console.log('last2: ' + last2)

    if (operation.length == 1 && operands.includes(last)){
        display.setAttribute("value", "")
    } 

    if (last == operand){ 
        display.setAttribute("value", n1)
    }

    if (n2 || n2 == 0){
        display.setAttribute("value", n2)
    }

    if (operands.includes(operand) && last == "="){
        display.setAttribute("value", "")
        let result = operate(operand, n1, n2)
        display.setAttribute("value", result)
        console.log("n1,n2: " + n1 + ' '  + n2)
        operation = [result]
    }

    if (operands.includes(operand) && !isNaN(n1) && !isNaN(n2) && operand_list.length == 2){
        let result = operate(operand, n1, n2)
        display.setAttribute("value", result)
        operation = [result]
        operation.push(operand)
    }
    
    if (last == "C"){
        display.setAttribute("value", "")
        operation = []
    }

    if (operands.includes(last2) && operands.includes(last)){
        console.log('operation before: ' + operation)
        operation.splice(operation.length-2, 1)
        console.log('operation after: ' + operation)



    }
})

})
 