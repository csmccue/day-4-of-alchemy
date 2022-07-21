// import functions and grab DOM elements

// let state

const questionSection = document.getElementById('question-section');
const askedQuestion = document.getElementById('asked-question');
const askButton = document.getElementById('ask-button');
const answerSection = document.getElementById('answer-section');
const questionDisplay = document.getElementById('question-display');
const answerDisplay = document.getElementById('answer-display');
console.log(questionSection.classList);
const crystalBall = document.getElementById('crystal-ball');

const answers = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
];

// set event listeners 

askButton.addEventListener('click', () => {
    copyQuestion();
    toggleVisibility();
    showRandomAnswer();
    applyAnimations();
});

function copyQuestion() {
    const question = askedQuestion.value;
    questionDisplay.textContent = question;
}

function toggleVisibility() {
    questionSection.classList.add('hidden');
    answerSection.classList.remove('hidden');
}

function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    return item;
}
function showRandomAnswer(){
    const randomAnswer = getRandomItem(answers);
    answerDisplay.textContent = randomAnswer;
}

function applyAnimations(){
    answerDisplay.classList.add('fade-in');
    crystalBall.classList.add('shake');
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
