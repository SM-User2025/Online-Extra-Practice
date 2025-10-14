function checkAnswer(inputId, correctAnswer) {
  const userAnswer = document.getElementById(inputId).value.trim().toLowerCase();
  const result = document.getElementById("result" + inputId.slice(-1));

  if (userAnswer === correctAnswer.toLowerCase()) {
    result.textContent = "✅ Correct!";
    result.style.color = "green";
  } else {
    result.textContent = `❌ Incorrect. The correct answer is "${correctAnswer}".`;
    result.style.color = "red";
  }
}
