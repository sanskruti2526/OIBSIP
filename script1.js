/* sanskruti_task1.js */
function addValue(value) {
  const screen = document.getElementById("calc-screen");
  screen.value += value;
}

function clearScreen() {
  document.getElementById("calc-screen").value = "";
}


function deleteLast() {
  const screen = document.getElementById("calc-screen");
  screen.value = screen.value.slice(0, -1);
}

function calculateResult() {
  const screen = document.getElementById("calc-screen");
  try {
    screen.value = new Function("return " + screen.value)();
  } catch (err) {
    screen.value = "Error";
  }
}

document.querySelectorAll(".keypad button").forEach(btn => {
  const val = btn.getAttribute("data-val");
  if (val) {
    btn.addEventListener("click", () => addValue(val));
  }
});

document.getElementById("clear").addEventListener("click", clearScreen);
document.getElementById("equals").addEventListener("click", calculateResult);