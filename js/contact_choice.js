contact_choice.js
var contactChoice = document.getElementById("contact-choice");
var emailBox = document.getElementById("emailbox");
var phoneBox = document.getElementById("phonebox");
var textBox = document.getElementById("textbox");

function hideAllBoxes() {
    if (emailBox) {
        emailBox.style.display = "none";
    }
    if (phoneBox) {
        phoneBox.style.display = "none";
    }
    if (textBox) {
        textBox.style.display = "none";
    }
}

function showSelectedBox() {
    hideAllBoxes();

    if (contactChoice.value === "email") {
        emailBox.style.display = "block";
    } else if (contactChoice.value === "phone") {
        phoneBox.style.display = "block";
    } else if (contactChoice.value === "text") {
        textBox.style.display = "block";
    }
}

if (contactChoice && emailBox && phoneBox && textBox) {
    hideAllBoxes();
    contactChoice.addEventListener("change", showSelectedBox);
}
