//simple addition

document.getElementById('add').addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0; // "|| 0" = if the onversion fails(due to empty value or invalid number), it sets number1 and 2 to "0" as a fallback.
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    function add(number1, number2) { // defining the add function first
        return number1 + number2;
    }
    const result = add(number1, number2);

    document.getElementById('calculation-result').textContent = result; // or instead of result i could say "add(number1, number2)" and remove the variable "result"
})


//simple subtraction

document.getElementById('subtract').addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0; // "|| 0" = if the onversion fails(due to empty value or invalid number), it sets number1 and 2 to "0" as a fallback.
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    
    function subtract(number1, number2) {
        return number1 - number2;
    }
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
})


// simple multiplication

document.getElementById('multiply').addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0; // "|| 0" = if the onversion fails(due to empty value or invalid number), it sets number1 and 2 to "0" as a fallback.
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    
    function multiply(number1, number2) {
        return number1 * number2;
    }
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
})


// simple division
document.getElementById('divide').addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0; // "|| 0" = if the onversion fails(due to empty value or invalid number), it sets number1 and 2 to "0" as a fallback.
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    
    function divide(number1, number2) {
        return number1 / number2;
    }
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
})