var code = "";
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

var getCode = document.getElementById("codes");
var btnvalue = document.getElementById("submit");
var codeBox = document.getElementById("randomcode");

function generateCode() {
    code = "";

    for (var i = 0; i < 8; i++) {
        var charIndex = Math.floor(Math.random() * str.length);
        code += str.charAt(charIndex);
    }

    return code;
}

function disableButton(buttonValue) {
    btnvalue.disabled = buttonValue;

    if (buttonValue) {
        btnvalue.style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        btnvalue.style.color = "rgba(255,255,255,0.7)";
        btnvalue.style.cursor = "not-allowed";
    } else {
        btnvalue.style.backgroundColor = "rgba(73, 119, 209, 1)";
        btnvalue.style.color = "rgba(255,255,255,1)";
        btnvalue.style.cursor = "pointer";
    }
}

function evaluateCode() {
    var enteredCode = codeBox.value.trim();
    var generatedCode = code.trim();

    if (enteredCode === generatedCode) {
        disableButton(false);
    } else {
        disableButton(true);
    }
}

if (getCode && btnvalue && codeBox) {
    getCode.innerHTML = generateCode();
    disableButton(true);
    codeBox.addEventListener("input", evaluateCode);
}
