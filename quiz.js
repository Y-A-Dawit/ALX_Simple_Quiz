function checkAnswer() {
    const correctAnswer = 4; // represents the correct answer to the quiz question
    const radioButtons = document.querySelector('input[name="quiz"]:checked'); // a list that give a selected/clicked radio button
    // if any of the options are selected, then....
    const userAnswer = Number(radioButtons.value) // this one converts the value obtained from one of the input fields/radio button from string to integer

    // if what the user selected is equal to the actual correct answer
    if ( userAnswer === correctAnswer ) {
        document.querySelector('#feedback').textContent = "Correct! Well done."
    } else {
        document.querySelector('#feedback').textContent = "That's incorrect. Try again!"
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer) // when the submit button with an id of submit-answer is cliked, it triggers the "click event" executing the checkAnswer callback function
// make sure not to call the checkAnswer function directly(i.e., do not add "()" after the function name)
// when using getelementbyId # isn't needed