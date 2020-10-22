
//Questions to push into empty div
let testQuestions = [
    {
        question: "Here's a question, Buddy",
        answers: {
            a: "this answer",
            b: "this one",
            c: "this one tho",
            d: "alrighty"
        }, correctAnswer: 'a'
    },
    {
        question: "Here's a question, Buddy",
        answers: {
            a: "this answer",
            b: "this one",
            c: "this one tho",
            d: "alrighty"
        }, correctAnswer: 'c'
    },
    {
        question: "Here's a question, Buddy",
        answers: {
            a: "this answer",
            b: "this one",
            c: "this one tho",
            d: "alrighty"
        }, correctAnswer: 'b'
    },   
]


testQuestionsIndex = 0;
timerEl = document.getElementById("time");
time = testQuestions.length * 15;
let timerId;

// WHEN START BUTTON IS CLICKED

let startButton = document.getElementById('start');
startButton.addEventListener('click', startQuiz); 

// 1.)  WHEN START BUTTON IS CLICKED:
    function startQuiz() {
           //HIDE START SCREEN
       let quizEl = document.getElementById("quizstart");
       quizEl.setAttribute("class", "hide");
        
           //REPLACE WITH EMPTY DIV TO PLACE QUESTIONS:
       let questEl = document.getElementById("questions");
       questEl.removeAttribute("id");

        // TIMER STARTS
       timerId = setInterval(clockTick, 1000);

       timerEl.textContent = time;

        // LOAD QUESTIONS TO DIV
         loadQuestions();
    };
   
    // LOAD QUESTIONS TO EMPTY DIV, WITH MULTIPLE CHOICE ANSWERS
    function loadQuestions() {
        let titleCard = document.getElementById("question-title");
        titleCard.innerHTML = "What even is an array, buddy?"

        let choicesEL = document.getElementById("answers");
       
        choicesEL.textContent = "could be a thingy!";
    }

    function clockTick() {
        time--;
        timerEl.textContent = time;

        if (time < 1) {
            clearInterval(timerId);
        }

    }

// WHEN A QUESTION IS ANSWERED A NEW QUESTION POPS UP

// WHEN A QUESTION IS ANSWERED INCORRECTLY, LOSE TIME ON TIMER

//  GAME ENDS WHEN TIMER HITS 0 OR ALL QUESTIONS ARE ANSWERED

//  WHEN THE GAME ENDS, PLAYER CAN ENTER INITIALS AND SCORE GETS SAVED






