const body = document.querySelector("body");
const againBtn = document.querySelector(".again");
const checkBtn = document.querySelector(".check");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const guess = document.querySelector(".guess");
// Modal
const showBtn = document.querySelector('.show-button')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close-button')
const overlay = document.querySelector('.overlay')
// modal show
const hiddenFunction = () => {
  modal.classList.add('hidden')
  overlay.classList.add('hidden') 
}


showBtn.addEventListener('click', () => {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden') 
})

closeBtn.addEventListener('click', () => {
hiddenFunction()
})

overlay.addEventListener('click', () => {
 hiddenFunction() 
})

document.addEventListener('keydown', (e) => {
  if (e.code == 'Escape'){
    hiddenFunction()     
  }
})

// Let Score
let score = 20;

// HightScore
let highscore = 0;

// Random Number
let randomNumber = Math.floor(Math.random() * 20) + 1;

checkBtn.addEventListener("click", () => {
  if (guess.value) {
    if (guess.value == randomNumber) {
      message.textContent = "You are win 🎉";
      number.textContent = randomNumber;
      body.style.background = "#66df22";

      if (score > highscore) {
        highscore = score;
        highscoreEl.textContent = highscore;
      }
    } else if (guess.value > randomNumber) {
      message.textContent = "Too Height ↗";
      score--;
      scoreEl.textContent = score;
    } else if (guess.value < randomNumber) {
      message.textContent = "Too Low ↘";
      score--;
      scoreEl.textContent = score;
    }
  } else {
    message.textContent = "No Number ⛔";
  }

  if(score <= 0 ){
    lose()
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
  }
});

againBtn.addEventListener("click", () => {
lose()
});

function lose(){
  score = 20;
  scoreEl.textContent = 20;
  body.style.background = "#222";
  message.textContent = "Start guessing...";
  number.textContent = "?";
  guess.value = "";
  randomNumber = Math.floor(Math.random() * 20) + 1;
}
