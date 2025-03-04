const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.innerText;
    if (value === "=") {
      display.value = eval(display.value); // Calculate
    } else if (value === "C") {
      display.value = ""; // Clear
    } else {
      display.value += value; // Add to input
    }
  });
});