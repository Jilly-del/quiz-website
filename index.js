let Information_container = document.querySelector(".Info-Container");
let quiz_container = document.querySelector(".quiz-container");
let start_btn = document.querySelector(".start-btn button");
let exit_btn = document.querySelector(".btn1");
let continue_btn = document.querySelector(".btn2");
let next_ques_btn = document.querySelector(".next-ques");
let result_container = document.querySelector(".result-container");
let total_ques = document.querySelector(".total_ques");
let option_list = document.querySelector(".option_list");
let time_sec = document.querySelector(".time_sec");
let time_line = document.querySelector(".time_line");

let quesindex = 0;
let footertextindex = 1;
let counter;
let timeValue = 15;
let widthValue = 0;

let tickIcon = `<div class="icon tick">
    <i class="fas fa-check"></i>
  </div>
`;

let crossIcon = `
  <div class="icon cross">
    <i class="fas fa-times"></i>
  </div>
`;

start_btn.addEventListener("click", function () {
  Information_container.classList.add("Info_container_active");
});

exit_btn.addEventListener("click", function () {
  Information_container.classList.remove("Info_container_active");
});

continue_btn.addEventListener("click", function () {
  quiz_container.classList.add("quiz-container_active");
  showQuestion(0);
  footertextcounter(1);
  startTimer(timeValue);
  timerLiner(0);
});

next_ques_btn.addEventListener("click", function () {
  if (questions.length - 1 > quesindex) {
    quesindex++;
    footertextindex++;
    showQuestion(quesindex);
    footertextcounter(footertextindex);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    timerLiner(widthValue);
    next_ques_btn.style.display = "none";
  } else {
    console.log("You are through");
  }
});

function showQuestion(index) {
  let que_text = document.querySelector(".que_text");

  let que_tag = `<span> ${questions[index].num + ". "}${
    questions[index].question
  }</span>`;
  let option_tag = `
  <div class="option">${questions[index].Option[0]}<span></span></div>
  <div class="option">${questions[index].Option[1]}<span></span></div>
  <div class="option">${questions[index].Option[2]}<span></span></div>
  <div class="option">${questions[index].Option[3]}<span></span></div>
`;

  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;

  let option = document.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "answerSelected(this)");
  }
}

function footertextcounter(index) {
  let questionCounter = `<span> <p>${index} </p> of <p> ${questions.length} </p>Question </span>`;
  total_ques.innerHTML = questionCounter;
}

function answerSelected(answer) {
  clearInterval(counterLine);
  clearInterval(counter);
  let Userans = answer.textContent;
  let correctAnswer = questions[quesindex].answer;
  let allOption = option_list.children.length;
  if (Userans === correctAnswer) {
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeEnd", tickIcon);
  } else {
    answer.insertAdjacentHTML("beforeEnd", crossIcon);

    answer.classList.add("incorrect");
  }
  // to autoamtically select the correct answer
  for (let i = 0; i < allOption; i++) {
    if (option_list.children[i].textContent == correctAnswer) {
      option_list.children[i].setAttribute("class", "option correct");
      option_list.children[i].insertAdjacentHTML("beforeEnd", tickIcon);
    }
  }

  // To stop further clicking once an answer is selected
  for (let i = 0; i < allOption; i++) {
    option_list.children[i].classList.add("disable");
  }
  next_ques_btn.style.display = "block";
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    time_sec.textContent = time;
    time--;
    if (time < 9) {
      let timezero = time_sec.textContent;
      time_sec.textContent = "0" + timezero;
    }
    if (time < 0) {
      clearInterval(counter);
      time_sec.textContent = "00";
    }
  }
}

function timerLiner(time) {
  counterLine = setInterval(timer, 29);
  function timer() {
    time += 1;
    time_line.style.width = time + "px";

    if (time > 549) {
      clearInterval(counterLine);
    }
  }
}
