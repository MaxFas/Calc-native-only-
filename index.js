var operationButton = document.getElementsByClassName('Symbol-of-button');

var value1 = document.getElementById('number1');
var value2 = document.getElementById('number2');


function makeOperation(operationCode) {
    var number1 = Number(value1.value);
    var number2 = Number(value2.value);

    if (operationCode === "+") {
        var result = number1 + number2;
    } else if (operationCode === "-") {
        var result = number1 - number2;
    } else if (operationCode === "*") {
        var result = number1 * number2;
    } else if (operationCode === "/") {
        var result = number1 / number2;
    }
    window.alert(result);
}

function onSmthClick (EventObject){
var onClick = EventObject.currentTarget;
var symbol = onClick.innerHTML;
makeOperation (symbol);
}

console.dir(document.getElementById('one'))

for (let index = 0; index < operationButton.length; index++) {
    const button = operationButton[index];
    button.addEventListener('click', onSmthClick);
}
