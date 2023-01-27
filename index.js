let num1 = 8
let num2 = 2

document.getElementById("numb1").textContent = num1
document.getElementById("numb2").textContent = num2
let result = document.getElementById("ans")
function add() {
    let sm = num1 + num2
    result.textContent = "SUM: " + sm
}

function subtract() {
    let sbt = num1 - num2
  result.textContent = "DIFFERENCE: " + sbt
}

function divide() {
   let div = num1 / num2
   result.textContent = "DIVISION: " + div
}

function multiply() {
   let mul = num1 * num2
   result.textContent = "PRODUCT: " + mul
}