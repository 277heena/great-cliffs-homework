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


function currentTime() {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm;

    if (sec < 10) sec = "0" + sec;
    if (min < 10) min = "0" + min;

    if (hr == 0) {
        hr = 12;
        ampm = "AM";
    } else if (hr < 12) {
        ampm = "AM";
    } else if (hr == 12) {
        ampm = "PM";
    } else {
        hr = hr - 12;
        ampm = "PM";
    }

    var time = hr + ":" + min + ":" + sec + " " + ampm;

    var clock = document.getElementById("clock");
    if (clock) {
        clock.innerHTML = time;
    }
}

setInterval(currentTime, 1000);
currentTime();
