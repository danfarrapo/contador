var counterVal = 0;
//var counter5 = 5;
var Patience = "Parabéns pela Paciência";
var foco = "Foco!";

function incrementClick() {
    updateDisplay(++counterVal), patience();
}

function decrementClick() {
    updateDisplay(--counterVal), patience();
}

function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
    
}

const audio = new Audio('WHISTLE.WAV');
audio.play();


function patience() {
  // if (counterVal == counter5) {updatepatience()}
    if (counterVal%5 == 0) {updatepatience()}
       else {updatepatience2()}
}

function updatepatience() {
    document.getElementById("counter-patience").innerHTML = Patience;
    }

function updatepatience2() {
    document.getElementById("counter-patience").innerHTML = foco;
    }