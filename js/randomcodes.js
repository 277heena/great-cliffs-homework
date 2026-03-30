var code = "";
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
var getCode = document.getElementById("codes");
var btnvalue = document.getElementById("submit");

function generateCode() {
    code = "";

    for (var i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() * str.length);
        code = code + str.charAt(char);
    }

    return code;
}

if (getCode) {
    getCode.innerHTML = generateCode();
}

function disableButton(buttonValue) {
    if (btnvalue) {
        btnvalue.disabled = buttonValue;

        if (buttonValue == true) {
            btnvalue.style.backgroundColor = "rgba(73, 119, 209, 0.3)";
            btnvalue.style.color = "rgba(255,255,255,0.7)";
            btnvalue.style.cursor = "not-allowed";
        } else {
            btnvalue.style.backgroundColor = "rgba(73, 119, 209, 1)";
            btnvalue.style.color = "rgba(255,255,255,1)";
            btnvalue.style.cursor = "pointer";
        }
    }
}

var codeBox = document.querySelector("input[name='randomcode']");

if (codeBox) {
    codeBox.addEventListener("input", evaluateCode);
}

function evaluateCode() {
    var enteredCode = codeBox.value;
    var cleanedCode = enteredCode.trim();
    var cleanedGeneratedCode = code.trim();

    if (cleanedCode === cleanedGeneratedCode) {
        disableButton(false);
    } else {
        disableButton(true);
    }
}
