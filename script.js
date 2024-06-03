function plus() {
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  answer = document.getElementById("answer");

  answer.innerHTML = Number(num1) + Number(num2);
}

function minus() {
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  answer = document.getElementById("answer");

  answer.innerHTML = Number(num1) - Number(num2);
}

function delenie() {
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  answer = document.getElementById("answer");

  answer.innerHTML = Number(num1) / Number(num2);
}

function multiplication() {
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  answer = document.getElementById("answer");

  answer.innerHTML = Number(num1) * Number(num2);
}
