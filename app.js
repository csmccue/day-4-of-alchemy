// import functions and grab DOM elements

// let state

const questionSection = document.getElementById('question-section');
const askedQuestion = document.getElementById('asked-question');
const askButton = document.getElementById('ask-button');
const answerSection = document.getElementById('answer-section');
const questionDisplay = document.getElementById('question-display');
const answerDisplay = document.getElementById('answer-display');
const crystalBall = document.getElementById('crystal-ball');


const picZero = document.getElementById('pic0');
const picOne = document.getElementById('pic1');
const picTwo = document.getElementById('pic2');
const picThree = document.getElementById('pic3');
const picFour = document.getElementById('pic4');
const picFive = document.getElementById('pic5');
const picSix = document.getElementById('pic6');
const picSeven = document.getElementById('pic7');
const picEight = document.getElementById('pic8');
const picNine = document.getElementById('pic9');
const picTen = document.getElementById('pic10');
const picEleven = document.getElementById('pic11');

const answers = [
    'Chips and Salsa',        
    'Chicken Fajitas', 
    'OldTimer with Cheese',
    'Steak Fajitas',
    'Chicken Crispers',
    'Baby Back Ribs ',
    'Queso Burger',
    'Ultimate Smokehouse Combo',
    'Southwestern Eggrolls',
    'Cajun Shrimp Pasta',
    'Chipotle Shrimp Fresh Mex Bowl',
    'Big Mouth Crispy Chicken Sandwich',
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
    questionDisplay.textContent = 'I hear you like ' + question + '.';
}

function toggleVisibility() {
    questionSection.classList.add('hidden');
    answerSection.classList.remove('hidden');
}
function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    if (randomIndex === 0) {
        picZero.classList.remove('hidden');
    }  
    if (randomIndex === 1) {
        picOne.classList.remove('hidden');
    }  
    if (randomIndex === 2) {
        picTwo.classList.remove('hidden');
    }  
    if (randomIndex === 3) {
        picThree.classList.remove('hidden');
    }  
    if (randomIndex === 4) {
        picFour.classList.remove('hidden');
    }  
    if (randomIndex === 5) {
        picFive.classList.remove('hidden');
    }  
    if (randomIndex === 6) {
        picSix.classList.remove('hidden');
    }  
    if (randomIndex === 7) {
        picSeven.classList.remove('hidden');
    }  
    if (randomIndex === 8) {
        picEight.classList.remove('hidden');
    }  
    if (randomIndex === 9) {
        picNine.classList.remove('hidden');
    }  
    if (randomIndex === 10) {
        picTen.classList.remove('hidden');
    }  
    if (randomIndex === 11) {
        picEleven.classList.remove('hidden');
    }  
    return item;
}
function showRandomAnswer(){
    const randomAnswer = getRandomItem(answers);
    answerDisplay.textContent = 'Why not try the ' + randomAnswer + '?';
}

function applyAnimations(){
    answerDisplay.classList.add('fade-in');
    crystalBall.classList.add('shake');
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
