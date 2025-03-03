




// let question = document.getElementById('question');
// let option1 = document.getElementById('option1');
// let option2 = document.getElementById('option2');
// let option3 = document.getElementById('option3');
// let option4 = document.getElementById('option4');
// let result = document.getElementById('result');
// let container = document.getElementById('container');
// let scoreDisplay = document.getElementById('score');

// let currentquestion = 0;
// let totalquestions = questions.length;
// let score = 0;

let question = document.getElementById('question');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let container = document.getElementById('container');
let mark = document.getElementById('score');
let nextButton = document.getElementById('Nextquestion');
let restartButton = document.querySelector(".nextbutton");

let currentquestion = 0;
let totalquestions = questions.length;
let score = 0;

function loadquestion(index) {
    let data = questions[index];
    question.textContent = (index + 1) + '. ' + data.question;
    option1.textContent = data.option1;
    option2.textContent = data.option2;
    option3.textContent = data.option3;
    option4.textContent = data.option4;

    let selectedOption = document.querySelector('#container input[type=radio]:checked');
    if (selectedOption) selectedOption.checked = false;
}

function loadNextquestion() {
    let selectedOption = document.querySelector('#container input[type=radio]:checked');
    if (!selectedOption) {
        alert('Please Choose any option');
        return;
    }

    if (questions[currentquestion].answer == selectedOption.value) {
        score += 10;
    }
    selectedOption.checked = false;

    currentquestion++;

    if (currentquestion == totalquestions - 1) {
        nextButton.textContent = 'Finish';
    }

    if (currentquestion == totalquestions) {
        container.style.display = 'none';
        mark.innerText = "Your score is " + score;
        nextButton.style.display = 'none'; // Hide Next button
        restartButton.style.display = 'inline-block'; // Show Restart button
    } else {
        loadquestion(currentquestion);
    }
}

function restartGame() {
    score = 0;
    currentquestion = 0;
    container.style.display = '';
    mark.innerText = '';
    nextButton.textContent = 'Next Question';
    nextButton.style.display = 'inline-block'; // Show Next button
    restartButton.style.display = 'none'; // Hide Restart button
    loadquestion(currentquestion);
}

loadquestion(currentquestion);
//     let data = questions[index];
//     question.textContent = (index + 1) + '. ' + data.question;
//     option1.textContent = data.option1;
//     option2.textContent = data.option2;
//     option3.textContent = data.option3;
//     option4.textContent = data.option4;

//     let selectedoption = document.querySelector('#container input[type=radio]:checked');
//     if (selectedoption) selectedoption.checked = false;
// };

// function loadNextquestion() {
//     let selectedoption = document.querySelector('#container input[type=radio]:checked');
//     if (!selectedoption) {
//         alert('Please choose any option');
//         return;
//     }

//     if (questions[currentquestion].answer == selectedoption.value) {
//         score += 10;
//     }
//     selectedoption.checked = false;

//     currentquestion++;

//     if (currentquestion == totalquestions - 1) {
//         document.getElementById('Nextquestion').textContent = 'Finish';
//     }

//     if (currentquestion == totalquestions) {
//         container.style.display = 'none';  // Hide the quiz container
//         result.style.display = 'block';   // Show the result container
//         result.textContent = 'Your Score: ' + score;  // Display the score
//         return;
//     }

//     loadquestion(currentquestion);
// };

// function restartGame() {
//     score = 0;
//     currentquestion = 0;
//     container.style.display = '';  // Show the quiz container again
//     result.style.display = 'none';  // Hide the result container
//     scoreDisplay.textContent = '';  // Reset the score display
//     loadquestion(currentquestion);
// };

// // Initial load
// loadquestion(currentquestion);
