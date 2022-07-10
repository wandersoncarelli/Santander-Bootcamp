var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumberWrapper3 = document.getElementById('currentNumber3');
var currentNumberWrapper4 = document.getElementById('currentNumber4');
var currentNumber = 0;
var currentNumber2 = 0;
var currentNumber3 = 0;
var currentNumber4 = 0;

// Adição
function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

// Subtração
function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

// Adição com método addEventListener
document.getElementById('increment2').addEventListener("click", function() {
        currentNumber2 = currentNumber2 + 1
        document.getElementById('currentNumber2').innerHTML = currentNumber2;
    }
);

// Subtração com método addEventListener
document.getElementById('decrement2').addEventListener("click", function() {
    currentNumber2 = currentNumber2 - 1
    document.getElementById('currentNumber2').innerHTML = currentNumber2;
    }
);

// Adição com limitador
function increment_limit() {
    if (currentNumber3 >= 0 && currentNumber3 <= 9) {
        currentNumber3 = currentNumber3 + 1;
        currentNumberWrapper3.innerHTML = currentNumber3;
    }
}

// Subtração com limitador
function decrement_limit() {
    if (currentNumber3 >= 1 && currentNumber3 <= 10) {
        currentNumber3 = currentNumber3 - 1;
        currentNumberWrapper3.innerHTML = currentNumber3;
    }
}

// Adição currentNumber4
function increment_color() {
    currentNumber4 = currentNumber4 + 1;
    currentNumberWrapper4.innerHTML = currentNumber4;
    if (currentNumber4 >= 0) {
        document.getElementById('currentNumber4').style.color = 'black'
    }
}

// Subtração currentNumber4
function decrement_color() {
    currentNumber4 = currentNumber4 - 1;
    currentNumberWrapper4.innerHTML = currentNumber4;
    if (currentNumber4 < 0) {
        document.getElementById('currentNumber4').style.color = 'red'
    }
}
