// Determine Letter Grades - Start Code
// A: 80 - 100
// B: 65 - 79
// C: 55 - 64
// D: 50 - 54
// F: 0 - 49

// Determine Letter Grades Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Percentage Grades
  let engPercent = +document.getElementById("eng-percent").value;
  let socPercent = +document.getElementById("soc-percent").value;
  let mathPercent = +document.getElementById("math-percent").value;
  let sciPercent = +document.getElementById("sci-percent").value;

  // English
  letterGrade(engPercent, "eng");
  // Social
  letterGrade(socPercent, "soc");
  // Math
  letterGrade(mathPercent, "math");
  // Science
  letterGrade(sciPercent, "sci");
}

function letterGrade(percentage, subject) {
  let letter;
  if (percentage >= 80) {
    letter = "A";
  } else if (percentage >= 65) {
    letter = "B";
  } else if (percentage >= 55) {
    letter = "C";
  } else if (percentage >= 50) {
    letter = "D";
  } else {
    letter = "F";
  }
  document.getElementById(`${subject}-letter`).innerHTML = letter;
}
