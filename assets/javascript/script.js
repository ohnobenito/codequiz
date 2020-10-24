// FOR QUESTION ARRAY
let currentQuestionIndex = 0;

//TIMER INFO
let timerEl = document.getElementById("time");
time = questions.length * 20;
let timerId;

//VARIABLES TO REF HTML
let choicesEl = document.getElementById("choices");
let endGame = document.getElementById("endgame");
let initialsEl = document.getElementById("user-initials");
let initialsInput = document.querySelector("#initials");
let questEl = document.getElementById("questions");
let quizEl = document.getElementById("quizstart");
let scoreEl = document.getElementById("score");
let startButton = document.getElementById("start");
let submitHS = document.getElementById("submit");
let titleEl = document.getElementById("question-title");


//EVENT LISTENERS
startButton.addEventListener('click', startQuiz); 
submitHS.addEventListener('click', highScore);

// RUNS CLOCK TIMER
  function clockTick() {
      time--;
      timerEl.textContent = time;

      //IF CLOCK HITS 0 AUTOMATICALLY END GAME
      if (time === 0) {
          clearInterval(timerId);
          quizEnd()
      }
  };

//WHEN START BUTTON IS CLICKED START QUIZ FUNCTION STARTS:

    function startQuiz() {
           //HIDE THE START SCREEN BY SETTING THE DIV TO HIDE
       quizEl.setAttribute("class", "hide");
        
           //REPLACE WITH EMPTY DIV TO PLACE QUESTIONS BY REMOVING "ID" ATTRIBUTE:
       questEl.removeAttribute("id");

        // TIMER GONNA START NOW
       timerId = setInterval(clockTick, 1000);

        //DISPLAYS TIME IN TIMER SPOT
       timerEl.textContent = time;

        // LOAD QUESTIONS TO DIV
         quizQuestions();
    };
        
    // HERE'S THE FUNCTION TO GRAB THE QUESTIONS FROM OUR OTHER JAVA SHEET

    function quizQuestions() {
        // GRABS FIRST QUESTION
        let currentQuestion = questions[currentQuestionIndex];

        //UPDATE QUESTION TITLE IN HTML
        titleEl.textContent = currentQuestion.title;
       
        // THIS WILL CLEAR OUT ANY OLD ANSWERS
        choicesEl.innerHTML = "";

        // GRABS THE CHOICES
        currentQuestion.choices.forEach(function(choice, i) {

            // ADDS CHOICE BUTTONS FOR ANSWERS
            let choiceNode = document.createElement("button");
            choiceNode.setAttribute("class", "choice");
            choiceNode.setAttribute("value", choice);
            choiceNode.textContent = i + 1 + ". " + choice;

            //WHEN AN ANSWER IS SELECTED STARTS THIS FUNCTION
            choiceNode.onclick = questionClick;

            //APPENDS CHOICE BUTTONS TO CHOICE SECTION ON HTML
            choicesEl.appendChild(choiceNode);   
        });
    };

    function questionClick() {
        // CHECKS ANSWER
        if (this.value !== questions[currentQuestionIndex].answer) {
          // WHEN A QUESTION IS ANSWERED INCORRECTLY, LOSE TIME ON TIMER
          time -= 10;
      
          if (time < 0) {
            time = 0;
          }
      
          // UPDATES TIMER
          timerEl.textContent = time;
        } else {
            //ADDS 5 SECONDS TO CLOCK IF CORRECT
            time += 5;
            // UPDATES TIMER TO REFLECT
            timerEl.textContent = time;
        }
        // WHEN A QUESTION IS ANSWERED A NEW QUESTION POPS UP
        currentQuestionIndex++;
      
        // IF OUT OF QUESTIONS RUN QUIZEND FUNCTION
        if (currentQuestionIndex === questions.length) {
          quizEnd();
        }  // IF QUESTIONS AREN'T DONE QUESTIONS CONTINUE
            else {
          quizQuestions();
        }
      };
      // FUNCTION TO END GAME
    function quizEnd() {
        // HIDE QUESTION SECTION AGAIN
        questEl.setAttribute("class", "hide");
        // SHOW HIDDEN ENDGAME DIV
        endGame.removeAttribute("id");
        // STOP THE TIMER
        clearInterval(timerId);
        //FINAL SCORE IS EQUAL TO TIME ON CLOCK
        finalS.textContent = time;
    };

    // USE LOCAL STORAGE TO STORE HIGH SCORE 
    //REF ACTIVITY ON LOCAL STORAGE FOR REFRESHER
    function highScore() {
      let user = initialsInput.value.trim();
      let input = user + " " + time;
      console.log(input);
     
      localStorage.setItem("input", JSON.stringify(input));

      let lastPlayer = JSON.parse(localStorage.getItem("input"));
      scoreEl.textContent = lastPlayer;
    };