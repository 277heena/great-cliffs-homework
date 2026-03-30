digclock.js
function currentTime() {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm;

    if (sec < 10) {
        sec = "0" + sec;
    }

    if (min < 10) {
        min = "0" + min;
    }

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
