let resultInput = document.getElementById("result");

function append(value) {
    resultInput.value += value;
}

function clearScreen() {
    resultInput.value = "";
}

function deleteLast() {
    resultInput.value = resultInput.value.slice(0, -1);
}

function calculate() {
    try {
        resultInput.value = eval(resultInput.value);
    } catch (error) {
        resultInput.value = "Error";
    }
}