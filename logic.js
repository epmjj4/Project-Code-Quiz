//created a div container with id of quiz
var divQuiz = document.querySelector('#quiz');
//I created an h1Timer variable to target timer ID.
var h1Timer = document.querySelector('#timer');
//I created an h1Questions variable to target questions ID.
var h1Questions = document.querySelector('#questions');
//I created an olAnswers variable to target and ordered list with choices ID.
var olAnswers = document.querySelector("#choices");
//I created a hidden variable to hide text content once quiz starts
var hidden = document.querySelector('.hide');
//I created a startButton variable to target button on the page and start the quiz.
var startButton = document.querySelector("#startButton");

startButton.addEventListener("click", function (event) {
    console.log(event.target);
    prepareQuiz();
});


//declare function that has the timer and will go to the next step once it stops at zero
function prepareQuiz() {
    //created a variable for 5 seconds, which will notify user how many seconds there are until quiz begins.
    var seconds = 5;
    //create countdown timer.
    var questionInterval = setInterval(function () {
        //print the number of seconds to console.
        console.log(seconds);
        //should display words on the page
        h1Timer.textContent = seconds + " seconds until the Quiz begins. Good luck!!";
        //clears timer
        if (seconds === 0) {
            h1Timer.textContent = " ";
            //stop timer
            clearInterval(questionInterval);

            //call the next function for
            beginQuiz();
        }
        //this will subtract 1 second at a time
        seconds--;
    }, 1000);

}
//prepareQuiz();

//created a variable for 60 seconds, which will notify user how many seconds they have until the quiz is over.
var quizSeconds = 10;
function beginQuiz() {
        
    var testInterval = setInterval(function () {
        quizSeconds--;
        //clear
        //print the number of seconds to console.
        console.log(quizSeconds);
        //should display words on the page
        h1Questions.textContent = quizSeconds + " seconds until the Quiz is over. You've got this, Good luck!!";
        
        if (quizSeconds === 0) {
            h1Timer.textContent = " ";
            //stop timer
            clearInterval(testInterval);
                 

        }

        

    }, 1000);
}
function showQuestion(){
    for (var i = 0; i < quizQuestion[questionIndex].choices; i++) {

                h1Questions.textContent = " ";
                h1Questions.textContent = quizQuestion[quizQuestionIndex].question;

                console.log(quizQuestion[quizQuestionIndex]);
                console.log(quizQuestion[quizQuestionIndex].question);
                console.log(quizQuestion[quizQuestionIndex].choices);

           }
           
}