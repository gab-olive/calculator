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

operands = ['+','-','*','/']
nums = ['0','1','2','3','4','5','6','7','8','9']

function getOperand(operation) {
    return operation.filter(char => operands.includes(char));
}
let operation = []

buttons.forEach((button) =>{
    
    button.addEventListener('click', () => {

    let buttontext = button.textContent

    operation.push(buttontext)
    console.log(operation)
    const last = operation[operation.length-1]

    if (buttontext == "="){
        let currentValue = display.getAttribute("value") || "";
        display.setAttribute("value", currentValue + buttontext)
    }
    else if (nums.includes(buttontext)){
        let currentValue = display.getAttribute("value") || "";
        display.setAttribute("value", currentValue + buttontext)
    }
    
    console.log('operation  ' + operation)
    console.log('last  ' + last)

    let operand_list = getOperand(operation);
    let operand = operand_list[0]
    if (operand_list.length > 1){
        let operandIndex = operation.indexOf(operand)
        let n1 = parseInt(operation.slice(0, operandIndex).join(''))
        let n2 = parseInt(operation.slice(operandIndex + 1) .join(''))
        let result = operate(operand, n1, n2)
        display.setAttribute("value", result)
        console.log("n1,n2: " + n1 + ' '  + n2)
        result = operate(operand, result, last)
        display.setAttribute("value", result)
    }
    if (last == "="){
        console.log('operand list: ' + operand_list)

        operation.pop()
        console.log('operation working with: ' + operation)
        let operandIndex = operation.indexOf(operand)
        let n1 = parseInt(operation.slice(0, operandIndex).join(''))
        let n2 = parseInt(operation.slice(operandIndex + 1) .join(''))
        console.log('n1: ' + n1)
        console.log('n2: ' + n2)
        let result = operate(operand, n1, n2)
        console.log(result)
        display.setAttribute("value", result)
}
    if (last == "C"){
        display.setAttribute("value", '')
    }
}

)})


 