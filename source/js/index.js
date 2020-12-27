import "../scss/style.scss";

class Quiz {
  constructor(quizCount, progressPercents, quizProgress) {
    this.firstAnswer = 5;
    this.secondAnswer = 1;
    this.thirdAnswer = 3;
    this.allAnswersCount = null;

    this.answersPercents = [0, 0, 0];

    this.quizCount = quizCount;
    this.progressPercents = progressPercents;
    this.quizProgress = quizProgress;
  }

  getAnswer(evt) {
    switch (evt.target.id) {
      case "first-answer":
        this.firstAnswer++;
        break;
      case "second-answer":
        this.secondAnswer++;
        break;
      case "third-answer":
        this.thirdAnswer++;
        break;
      default:
        return;
    }
  }

  calculatePercents() {
    this.allAnswersCount++;

    this.answersPercents[0] = Math.floor(
      (this.firstAnswer / this.allAnswersCount) * 100
    );
    this.answersPercents[1] = Math.floor(
      (this.secondAnswer / this.allAnswersCount) * 100
    );
    this.answersPercents[2] = Math.floor(
      (this.thirdAnswer / this.allAnswersCount) * 100
    );
  }

  renderInfo() {
    this.quizCount.innerHTML = this.allAnswersCount;

    Array.from(this.progressPercents).map((progress, index) => {
      progress.innerHTML = `${this.answersPercents[index]}%`;
    });

    Array.from(this.quizProgress).map((progress, index) => {
      progress.value = this.answersPercents[index];
    });
  }

  renderAllAnswersCount() {
    this.allAnswersCount =
      this.firstAnswer + this.secondAnswer + this.thirdAnswer;
    this.quizCount.innerHTML = this.allAnswersCount;
  }
}

const quizAnswers = document.querySelectorAll(".quiz__answer");
const quizProgress = document.querySelectorAll(".quiz__progress");
const quizCount = document.querySelector(".quiz__count");
const progressPercents = document.querySelectorAll(".quiz__progress-percents");

const quiz = new Quiz(quizCount, progressPercents, quizProgress);

quiz.renderAllAnswersCount();

quizAnswers.forEach((answer) => {
  answer.addEventListener("click", (evt) => {
    quizAnswers.forEach((answer) => answer.classList.add("visually-hidden"));
    quizProgress.forEach((answer) =>
      answer.classList.remove("visually-hidden")
    );
    progressPercents.forEach((percent) =>
      percent.classList.remove("visually-hidden")
    );
    quiz.getAnswer(evt);
    quiz.calculatePercents();
    quiz.renderInfo();
  });
});
