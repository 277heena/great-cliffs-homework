script.js

var partners = [
    "images/partner/partner1.jpg",
    "images/partner/partner2.jpg",
    "images/partner/partner3.jpg",
    "images/partner/partner4.jpg",
    "images/partner/partner5.jpg",
    "images/partner/partner6.jpg"
];

var partnerList = document.getElementById("partners-list");

if (partnerList) {
    for (var i = 0; i < partners.length; i++) {
        partnerList.innerHTML += '<li class="partner"><img src="' + partners[i] + '"></li>';
    }
}