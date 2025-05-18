const output = document.getElementById("output-screen");

function display(num) {
  output.value += num;
}

function clearOutput() {
  output.value = "";
}

function del() {
  output.value = output.value.slice(0, -1);
}

function plusMinus() {
  output.value = eval(output.value) * -1;
}

function calculate() {
  try {
    output.value = eval(output.value);
  } catch (error) {
    alert(error.message);
  }
}
