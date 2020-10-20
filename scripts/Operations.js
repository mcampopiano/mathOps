export const mathOps = (num1, num2, operator) => {
    let result = "Something's wrong"
    if (operator === '+') {
         result = num1 + num2
    } else if (operator === '-') {
        result = num1 - num2
    } else if (operator === '*') {
        result = num1 * num2
    } else if (operator === '/') {
        result = num1 / num2
    } else {
        window.alert("Something's wrong")
    }
    return result
}