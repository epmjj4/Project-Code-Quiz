var quizQuestion = [{
    quotes: "Arrays in JavaScript can be used to store _____.",
    answerIndex: 3, //"4. all the above"
    choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"]

},
{
    quotes: "String Values must be enclosed within ____ when being assigned to variables",
    answerIndex: 3, //"4. parenthesis"
    choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"]

},
{
    quotes: "The condition in an if/else statement is enclosed with ____.",
    answerIndex: 2, //"3. parenthesis"
    choices: ["1.quotes", "2.curly brackets ", "3. parenthesis", "4.square brackets"]

},
{
    quotes: "Commonly used data types DO NOT include:",
    answerIndex: 2, //"3. alert"
    choices: ["1. strings", "2. booleans", "3. alert", "4. numbers"]

},
{
    quotes: "A very useful tool for users during development and debugging for printing content to the debugger is:",
    answerIndex: 3, //"4. console log"
    choices: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console log"]

},

];
var questionIndex = 0;
var questionTime = quizQuestion.length * 15;

//created a div container with id of quiz
var divQuiz = document.querySelector('#quiz');
//I created a divTimer variable to target timer ID.
var divTimer = document.querySelector('#time');
//I created a divQuestions variable to target questions ID.
var divQuestions = document.querySelector('#questions');
//I created a elAnswers variable to target and ordered list with choices ID.
var elAnswers = document.querySelector("#choices");
//I created a hidden variable to hide text content once quiz starts
var hidden = document.querySelector('.hide');
//I created a startButton variable to target button on the page and start the quiz.
var startBtn = document.querySelector("#startButton");
var rightWrongEl = document.querySelector('#rightWrong');

startBtn.addEventListener("click", function (event) {
console.log(event.target);
prepareQuiz();
});

document.querySelector('.timer').style.visibility = 'hidden';
//declare function that has the timer and will go to the next step once it stops at zero
function prepareQuiz() {
document.querySelector('.timer').style.visibility = 'visible';
//created a variable for 5 seconds, which will notify user how many seconds there are until quiz begins.
var seconds = 3;
//create countdown timer.
var questionInterval = setInterval(function () {
    //print the number of seconds to console.
    console.log(seconds);
    //should display words on the page
    divTimer.textContent = seconds + " seconds until the Quiz begins. Good luck!!";
    //clears timer
    if (seconds === 0) {
        divTimer.textContent = " ";
        document.querySelector('.timer').style.visibility = 'hidden';
        //stop timer
        clearInterval(questionInterval);

        //call the next function for
        showQuestion();
    }
    //this will subtract 1 second at a time
    seconds--;
}, 1000);

}
function showQuestion() {
for (var i = 0; i < quizQuestion[questionIndex].answerIndex; i++) {

    //grabbing question from the array
    var presentQuestion = quizQuestion[questionIndex].quotes;
    var quoteElement = document.getElementById('question-quote');
    quoteElement.textContent = presentQuestion.quote;
    elAnswers.textContent = " ";
    presentQuestion.choices.forEach(function (choice, index) {
        var choiceBtn = document.createElement('button');
        choiceBtn.setAttribute('class', 'choices');
        choiceBtn.setAttribute('value', 'choices');
        choiceBtn.textContent = index + 1 + "." + choice;
        // add an event listener to choice button
        choiceBtn.onclick = choiceClick;
        elAnswers.appendChild(choiceBtn);
    });

}

}

function choiceClick() {
if (this.value !== quizQuestion[questionIndex].answer) {
    questionTime -= 15;

    if (questionTime < 0) {
        questionTime = 0;
    }
    divTimer.textContent = questionTime;
    rightWrongEl.textContent = "Wrong";
} else {
    rightWrongEl.textContent = "You are Correct";
}
rightWrongEl.setAttribute('class', 'rightWrong');
setTimeout(function () {
    rightWrongEl.setAttribute('class', "rightWrong hide");
}, 1000);

questionIndex++;
if (questionIndex === quizQuestion.lengh) {
    endQuiz();
} else {
    showQuestion();
}

}
startBtn.onclick = showQuestion;