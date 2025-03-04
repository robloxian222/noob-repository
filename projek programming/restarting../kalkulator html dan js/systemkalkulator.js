const display = document.getElementById("display");
const buttons = document.getElementById(".btn");

buttons.forEach(button => {
 button.addEventListener("click", () =>{
  let value = button.innerText;
  if(value === "="){
    display.value = eval(display.value);
    //lanjutkan nanti
  }
 })
})