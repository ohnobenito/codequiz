// WHEN START BUTTON IS CLICKED

let startButton = document.getElementById('start');
startButton.addEventListener('click', startQuiz); 

// 1.) TIMER STARTS COUNTING DOWN
    //FUCNTION STARTCLOCK
    function startTimer();

// 2.) QUESTIONS START BEING PRESENTED
    // FUNCTION START QUIZ
    function startQuiz();


// WHEN A QUESTION IS ANSWERED A NEW QUESTION POPS UP

// WHEN A QUESTION IS ANSWERED INCORRECTLY, LOSE TIME ON TIMER

//  GAME ENDS WHEN TIMER HITS 0 OR ALL QUESTIONS ARE ANSWERED

//  WHEN THE GAME ENDS, PLAYER CAN ENTER INITIALS AND SCORE GETS SAVED


// LIST OF (test) QUESTIONS
let questions = [
    {
        title: "What was the title of Taylor Swift's first EXCLUSIVELY pop album?",
        choices: ["reputation", "RED", "1989", "Lover"],
        answer: "1989"
    },
    {
        title: "During the 2020 pandemic, Taylor released a surprise album. What was it called?",
        choices: ["woodsong", "folklore", "urban legends", "chromatica"],
        answer: "folklore"
    },
    {
        title: "When was Taylor Swift born?",
        choices: ["December 13th, 1989", "February 13th, 1988", "July 13th, 1987", "December 13th, 1988"],
        answer: "December 13th, 1989"
    },
    {
        title: "Here is another question about",
        choices: ["this answer", "nah", "okay", "this is the correct choice"],
        answer: "this is the correct choice"
    },
    {
        title: "sample question",
        choices: ["answer 1", "answer 2", "answer 3", "answer 4"],
        answer: "answer 3"
    },
    {
        title: "Another Question",
        choices: ["this is the answer", "nope", "nada", "hmmmm"],
        answer: "this is the answer"
    },
]






