function EnterNumber(num) {
    var numberText = document.getElementById('Answer');
    numberText.value += num;
}

function EnterOperator(opera) {
    var operaText = document.getElementById('Answer');
    operaText.value += '  ' + opera + '  ';
}

function EnterEqual() {
    var equalText = document.getElementById('Answer');
    var sum = eval(equalText.value);
    equalText.value = sum;
}

function EnterClear() {
    var clearText = document.getElementById('Answer');
    clearText.value = " "
}


