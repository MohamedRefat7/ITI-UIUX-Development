var input = document.getElementById("Answer");

function EnterNumber(num) {
  input.value += num;
}

function EnterClear() {
  input.value = "";
}

function EnterOperator(op) {
  input.value += op;
}

function EnterEqual() {
  if (input.value == "") return;
  input.value = eval(input.value);
}
