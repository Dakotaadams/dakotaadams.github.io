const firstNumInput = document.getElementById("FN");
const secondNumInput = document.getElementById("SN");
const thirdNumInput = document.getElementById("TN");
const resultDisplay = document.getElementById("result");
const calcButton = document.getElementById("btn");
function findMax() {
  const first = firstNumInput.valueAsNumber;
  const second = secondNumInput.valueAsNumber;
  const third = thirdNumInput.valueAsNumber;


  if (isNaN(first) || isNaN(second) || isNaN(third)) {
    resultDisplay.innerHTML = "Please enter all three numbers.";
    return; 
  }
  let max = first; 
  if (second > max) {
    max = second;
  }
  if (third > max) {
    max = third;
  }
  resultDisplay.innerHTML = max;
}
calcButton.addEventListener("click", findMax);
