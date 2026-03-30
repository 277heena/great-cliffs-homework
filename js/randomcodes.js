/* ------ RANDOM CODES ------ */

// Function to generate combination of characters
function generateCode() {
    var code = "";
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

    for (var i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() * str.length);
        code = code + str.charAt(char);
    }

    return code;
}

// Display code on the contact page
var codeDisplay = document.getElementById("codes");
if (codeDisplay) {
    codeDisplay.innerHTML = generateCode();
}

// Disable submit button for Day 1
function disableButton() {
    var submitButton = document.getElementById("submit");

    if (submitButton) {
        submitButton.disabled = true;
    }
}
