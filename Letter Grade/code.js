function calculateGrade(score) {
    let grade = "";

    if (isNaN(score) || score < 0 || score > 100) {
        grade = "Please enter a valid score between 0 and 100";
    } else if (score >= 97) grade = "A+";
    else if (score >= 93) grade = "A";
    else if (score >= 90) grade = "A−";
    else if (score >= 87) grade = "B+";
    else if (score >= 83) grade = "B";
    else if (score >= 80) grade = "B−";
    else if (score >= 77) grade = "C+";
    else if (score >= 73) grade = "C";
    else if (score >= 70) grade = "C−";
    else if (score >= 67) grade = "D+";
    else if (score >= 63) grade = "D";
    else if (score >= 60) grade = "D−";
    else grade = "F";

    return grade;
}

function displayGrade() {
    const inputElement = document.getElementById("scoreInput");
    const resultElement = document.getElementById("result");

    const score = Math.trunc(inputElement.valueAsNumber);

    const grade = calculateGrade(score);

    resultElement.innerHTML = `Your grade is: ${grade}.`;
}

const buttonElement = document.getElementById("checkGradeBtn");
buttonElement.addEventListener("click", displayGrade);