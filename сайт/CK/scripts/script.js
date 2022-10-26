const calculator = document.querySelector('.calculator');
const result = document.querySelector('.result');

calculator.addEventListener('click', function(event) {
    if (!event.target.classList.contains('button')) return;
    const value = event.target.innerText;

    switch(value) {
        case 'Reset':
            result.innerText = '';
            break;
        case '=':
            result.innerText = eval(result.innerText).toFixed(2);
            break;
        case 'backspace':
            result.innerText = result.innerText.slice(0, -1);
            break;
        default:
            result.innerText += value;
    }
});