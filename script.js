const buttons = document.querySelectorAll('.button');
const toggleLight = document.querySelector('#toggle');
const clear = document.querySelector('#clear');
const remove = document.querySelector('#remove');
const calculateRes = document.querySelector('#calculate');
const home = document.querySelector('#home')

function appendToDisplay(value) {
    const display = document.getElementById('DisplayInput');
    display.value = display.value + value;
}

function removeLast() {
    const display = document.getElementById('DisplayInput');
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    document.getElementById('DisplayInput').value = '';
}

function calculate() {
    const display = document.getElementById('DisplayInput');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Napaka!';
    }
}

function toggleState() {
    const body = document.querySelector('body');
    body.classList.toggle('dark');
    body.classList.toggle('light');

}

toggleLight.addEventListener('click', toggleState);
clear.addEventListener('click', clearDisplay);
buttons.forEach(button => {
    button.addEventListener('click', function () {
        appendToDisplay(this.value);
    });
});
remove.addEventListener('click', removeLast);
calculateRes.addEventListener('click', calculate);
