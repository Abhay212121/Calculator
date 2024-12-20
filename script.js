// let num1 = prompt("Enter first number");
// let num2 = prompt("Enter second number");
// let operator = prompt("enter operator")


const operate = (operator, num1, num2) => {
    switch (operator) {
        case '+':
            add(num1, num2)
            break;

        case '-':
            subtract(num1, num2)
            break;

        case '*':
            multiply(num1, num2)
            break;

        case '/':
            divide(num1, num2)
            break;

        default:
            break;
    }
}


const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2
}

const multiply = (num1, num2) => {
    return num1 * num2
}

const divide = (num1, num2) => {
    return num1 / num2
}


let result = document.querySelector('.result-container');
const resultGenerator = () => {
}


let btns = document.querySelectorAll('.in-result');
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        result.innerHTML = (btn.innerHTML)
    })
})  