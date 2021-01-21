//targeted id's for the answers
var answerA = document.querySelector('#answer-1');
var answerB = document.querySelector('#answer-2');
var answerC = document.querySelector('#answer-3');
var answerD = document.querySelector('#answer-4');
var answerE = document.querySelector('#answer-5');
//targeted id's for questino choices
var choiceA = document.querySelector('#choice-A');
var choiceB = document.querySelector('#choice-B');
var choiceC = document.querySelector('#choice-C');
var choiceD = document.querySelector('#choice-D');
var choiceE = document.querySelector('#choice-E');
//targetting start button   
var startBtn = document.querySelector('#startBtn');
// question list ID
var questionList = document.querySelector('#questionList');
//question id
var questionTitle = document.querySelector('#questionTitle');
//form ID
var questionForm = document.querySelector('#questionForm');
//time id
var time = document.querySelector('#time');
//total seconds of quiz
var secondsLeft = 7;
//quizQuestion Index
var currentQuestion = 0;
//user choices
var userChoice = '';
//correct answer
var correctAnswer = '';
//score
var score = 0;
//endscreen
var finalScore = document.querySelector('#finalScore');
//score count
var scoreCount = document.querySelector('#scoreCounter');
// message id
var message = document.querySelector('#msg');
//submit with name ID
var playerName = document.querySelector('#playerName')
// Enter you user name 
var userName = document.querySelector('#userName');
//submit button
var submitBtn = document.querySelector('#sumbit');

//begin quiz
function beginQuiz() {
    var quizBtn = document.querySelector('#beginQuiz');
    // removes beginQuiz class when button is clicked
    quizBtn.setAttribute('style', 'display: none');
    // calls to radio buttons can be displayed
    questionForm.removeAttribute('class');
}

//timer
function timer() {
    var quizInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = "You have  " +  secondsLeft  + " until Quiz is over."
        if (secondsLeft === 0) {
            clearInterval(quizInterval);
            alert('Sorry, but you are out of time.')
        }
    }, 1000);
}

function showQuestion() {
    // this will grab index from the quizQuestion array
    var question = quizQuestion[currentQuestion];
    // the questionTitle will be displayed in questionList div
    questionTitle.innerHTML = question.quotes;

    choiceA.textContent = question.answerIndex.a;
    choiceB.textContent = question.answerIndex.b;
    choiceC.textContent = question.answerIndex.c;
    choiceD.textContent = question.answerIndex.d;
    choiceE.textContent = question.answerIndex.e;
    correctAnswer = question.choices;
    //message
    msg.textContent = ('');
    finalScore = ('');
}

function rightAnswer() {
    // if the user chooses correct answer, they will receive one point
    // and message will displayed that it is correct. 
    if (userChoice === correctAnswer) {
        score++;
        scoreCount.innerHTML = "Current Score " + score;
        msg.textContent = "You are correct";
    } else {
        // if answer is not correct, they will get a 5 sec penalty
        scoreCount.innerHTML = "Current Score " + score;
        secondsLeft -= 5;
        msg.textContent = "You chose wrong answer, you will penalized time";
    }
    setTimeout(function () {
        // this will make sure function goes through entire loop
        currentQuestion++;
        if (currentQuestion < quizQuestion.length) {
            rightAnswer();
            //once last quesiton is answered , game will end

        } else {
            gameOver();
        }
        // the function will wait 3 secs after answer is clicked to move onto next question
    }, 3000);
}

function gameOver(){
    // when game is done, questions, timer, and msg for correct/incorrect are not displayed
    questionList.setAttribute("style", "display: none;");
    time.setAttribute("style", "display: none;");
    msg.setAttribute("style", "display: none;");
    finalScore.textContent = "You score " + score + " points";
    playerName.removeAttribute('class');
}
//players score and name saved to localStorage
function playerScore(){
    var inputName = userName.nodeValue.trim();
    console.log(inputName);
    // make sure their are no blank initials
    if(inputName !== ""){
        var highscores = JSON.parse(window.localStorage.getItem("score")) || [];
        //user input storage format 
        var inputScore = {
            score: score,
            inputName: inputName
        };

        //adding the new score and the name to the array of high scores
        highscores.push(inputScore);
        //add the high score to the local storage
        window.localStorage.setItem("score", JSON.stringify(highscores));
        //change the url to score.html page
        window.location.href = "scores.html";

    }
}
// when start button is clicked, it will call beginQuiz, timer, and showQuestion functions
startBtn.addEventListener('click', function(){
    beginQuiz();
    timer();
    showQuestion();
});
//submit button
submitBtn.addEventListener('click', function(){
    playerScore();
})

//When you select a choice
function pickChoice(event){
    var button = event.target;
    userChoice = button.dataset.answer;
    rightAnswer();

};

//event listener for each choice and when click 
//it will call the pickChoice 
answerA.addEventListener("click", pickChoice);
answerB.addEventListener("click", pickChoice);
answerC.addEventListener("click", pickChoice);
answerD.addEventListener("click", pickChoice);
answerE.addEventListener("click", pickChoice);