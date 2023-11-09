var numbers = [];
var countdownInterval;

function generateNumbers() {
  numbers = [];
  for (var i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 10));
  }
  document.getElementById("numbers").innerHTML = numbers.join(" ");
  startCountdown();
}

function startCountdown() {
  var timeLeft = 30;
  var timerElement = document.getElementById("timer");
  timerElement.innerHTML = timeLeft;

  countdownInterval = setInterval(function () {
    timeLeft--;
    timerElement.innerHTML = timeLeft;

    if (timeLeft === 0) {
      clearInterval(countdownInterval);
      hideNumbers();
    }
  }, 1000);
}

function hideNumbers() {
  document.getElementById("numbers").innerHTML = "";
  var inputs = document.getElementsByClassName("number-input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove("hidden");
  }
}

function checkNumbers() {
  var inputs = document.getElementsByClassName("number-input");
  var guessedNumbers = [];
  for (var i = 0; i < inputs.length; i++) {
    guessedNumbers.push(parseInt(inputs[i].value));
    inputs[i].classList.add("hidden");
    inputs[i].value = "";
  }
  var correctNumbers = numbers.filter(function (num) {
    return guessedNumbers.includes(num);
  });
  alert(
    "Hai indovinato " +
      correctNumbers.length +
      " numeri: " +
      correctNumbers.join(", ")
  );
}

function resetGame() {
  clearInterval(countdownInterval);
  var inputs = document.getElementsByClassName("number-input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].classList.add("hidden");
    inputs[i].value = "";
  }
  document.getElementById("numbers").innerHTML = "";
  document.getElementById("timer").innerHTML = "";
}
