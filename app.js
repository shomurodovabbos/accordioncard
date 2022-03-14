const questions = document.querySelectorAll(".question-box");

questions.forEach(function (question) {
  const btn = question.querySelector(".btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
        question.classList.add("bold");
        item.classList.remove("bold");
      }
    });
    question.classList.toggle("show-text");
  });
});
