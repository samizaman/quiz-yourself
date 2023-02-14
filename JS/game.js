const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choicetext"));
const questioncountertext = document.getElementById("questioncounter");
const scoretext = document.getElementById("score");

let currentquestion = {};
// to create delay before they can answer again
let acceptinganswers = false;
let score = 0;
// to show which question are you on
let questioncounter = 0;
// a copy of our full question set to always give a unique question to the user
let availablequestions = [];

let questions = [
  {
    question: "What is 2 + 2?",
    choice1: "2",
    choice2: "4",
    choice3: "21",
    choice4: "17",
    answer: 1,
  },
  {
    question: "Do i wanna sleep myself?",
    choice1: "yes",
    choice2: "definitely",
    choice3: "why not",
    choice4: "hell no",
    answer: 1,
  },
  {
    question: "Do i wanna jump myself?",
    choice1: "yes",
    choice2: "definitely",
    choice3: "why not",
    choice4: "hell no",
    answer: 1,
  },
  {
    question: "Do i wanna jump myself?",
    choice1: "yes",
    choice2: "definitely",
    choice3: "why not",
    choice4: "hell no",
    answer: 1,
  },
  {
    question: "Do i wanna jump myself?",
    choice1: "yes",
    choice2: "definitely",
    choice3: "why not",
    choice4: "hell no",
    answer: 1,
  },
  {
    question: "Do i wanna jump myself?",
    choice1: "yes",
    choice2: "definitely",
    choice3: "why not",
    choice4: "hell no",
    answer: 1,
  },
];

const CORRECTBONUS = 10;
const MAXQUESTIONS = 6;

function startgame() {
  questioncounter = 0;
  score = 0;
  //spread operator to get all the values from questiond
  availablequestions = [...questions];
  getnewquestion();
}

function getnewquestion() {
  // after splicing all the questions from array if there are no more then we redirect to gameover page
  if (availablequestions.length === 0 || questioncounter >= MAXQUESTIONS) {
    // setting key, value
    localStorage.setItem("latestscore", score);
    return window.location.assign("/Gameover.html");
  }

  questioncounter++;
  //updating question hud // template literals
  questioncountertext.innerText = `${questioncounter} / ${MAXQUESTIONS}`;

  //randomizing the question picked from the array
  const questionindex = Math.floor(Math.random() * availablequestions.length);
  //reference to current question by accessing it in the array through questionindex
  currentquestion = availablequestions[questionindex];
  question.innerText = currentquestion.question;

  //iterating through all the choices
  choices.forEach((choice) => {
    // targeting the data-number in html through dataset property
    const number = choice.dataset["number"];
    choice.innerText = currentquestion["choice" + number];
  });
  //removing existing questions from the array by telling where to remove from and how many to remove
  availablequestions.splice(questionindex, 1);

  //letting user answer after the question has been loaded
  acceptinganswers = true;
}

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    // detecting if the answer is correct
    if (!acceptinganswers) {
      return;
    }
    acceptinganswers = false;
    const selectedchoice = e.target;
    const selectedanswer = selectedchoice.dataset["number"];

    // applying class on the selected answer
    let classtoapply = "incorrect";
    if (selectedanswer == currentquestion.answer) {
      classtoapply = "correct";
    }

    if (classtoapply === "correct") {
      updatescore(CORRECTBONUS);
    }

    selectedchoice.parentElement.classList.add(classtoapply);

    // setting the class to be removed after 1 second
    setTimeout(() => {
      selectedchoice.parentElement.classList.remove(classtoapply);
      getnewquestion();
    }, 1000);
  });
});

function updatescore(number) {
  score = score + number;
  scoretext.innerText = score;
}

startgame();
