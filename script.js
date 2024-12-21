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
const modulus = (num1, num2) => {
    return num1 % num2
}

const operate = (operator, num1, num2) => {
    switch (operator) {
        case '+':
            return add(num1, num2)

        case '-':
            return subtract(num1, num2)

        case '*':
            return multiply(num1, num2)

        case '/':
            return divide(num1, num2)

        case '%':
            return modulus(num1, num2)
        default:
            break;
    }
}


let result = document.querySelector('.result-container');
let calculateBtn = document.querySelector('.answer');
let clearBtn = document.querySelector('.clear')
let deleteBtn = document.querySelector('.del')
let operatorBtn = document.querySelectorAll('.operator');
let op;
let nums = document.querySelectorAll('.num');

let opcount = 0;
let consecutiveOpcount = false;
let decicount = 0;
let zeroorone;

nums.forEach((btn) => {
    btn.addEventListener('click', () => {

        if (result.innerHTML == `Abhay's Calculator`) {
            result.innerHTML = ''
        }

        if (btn.innerHTML == '.') {
            if (decicount == 0) {
                decicount++;
                result.innerHTML += btn.innerHTML;
            }
        }
        else {
            result.innerHTML += btn.innerHTML;
        }
    })
})

const resultGenerator = () => {
    let newArr = result.innerHTML.split(op)
    let num1, num2;
    if (newArr.length == 3) {
        num1 = +("-" + newArr[1])
        num2 = +newArr[2]
    } else {
        num1 = +newArr[0]
        num2 = +newArr[1]
    }
    let value = operate(op, num1, num2)
    result.innerHTML = parseFloat(value.toFixed(8))
    decicount = 0
    opcount = 1
    console.log(newArr, num1, num2, op)
    if (result.innerHTML == 'NaN') {
        result.innerHTML = 'ERROR!'
    }
}

let consecutiveFlag = false

operatorBtn.forEach((btn) => {
    btn.addEventListener('click', () => {

        if (result.innerHTML == `Abhay's Calculator`) {
            result.innerHTML = ''
        }


        opcount++;

        if (opcount == 1) {
            op = btn.innerHTML;
            result.innerHTML += btn.innerHTML;
        }

        else if (opcount == 2) {
            resultGenerator()
            op = btn.innerHTML;
            result.innerHTML += btn.innerHTML;
        }


        decicount = 0
    })
})

calculateBtn.addEventListener('click', () => {

    let tempArr = result.innerHTML.split(op)
    let tempnum1 = +tempArr[0]
    let tempnum2 = +tempArr[1]


    if (typeof (tempnum1) == "number" && typeof (tempnum2) == "number") {
        resultGenerator();
        opcount = 0
    }
    else {
        result.innerHTML = 'hii'
    }
})

clearBtn.addEventListener('click', () => {
    result.innerHTML = `Abhay's Calculator`;
    opcount = 0;
    decicount = 0;
})

deleteBtn.addEventListener('click', () => {

    if (result.innerHTML == `Abhay's Calculator`) {
        result.innerHTML = ' '
    }

    let temp = result.innerHTML.slice(result.innerHTML.length - 1)
    result.innerHTML = result.innerHTML.slice(0, -1)
    if (temp == '.') {
        decicount = 0;
    }
    if (temp == op) {
        opcount--
        if (result.innerHTML.slice(0, result.innerHTML.size).includes('.')) {
            decicount = 1;
        }
        else {
            decicount = 0;
        }
    }
})


