function onReady() {
    var clk = new createClock();
}

var currentHours;
var currentMinutes;
var currentSeconds;
var createClock = function() {
    var date = new Date();
    currentHours = formatDisplay(date.getHours());
    currentMinutes = formatDisplay(date.getMinutes())
    currentSeconds = formatDisplay(date.getSeconds());
    var currentTime = currentHours + ":" + currentMinutes + ":" + currentSeconds;

    // currrent = formatDisplay(date.getHours() +
    //     ":" + formatDisplay(date.getMinutes()) +
    //     ":" + formatDisplay(date.getSeconds()));
    var timer = document.getElementById("clock");
    timer.innerHTML = currentTime;
    var t = setTimeout(createClock, 1000);

    if (currentMinutes > 0 && currentMinutes < 15) {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#111000";
        document.getElementById('clock').style.color = "#BE3144";

    }

    if (currentMinutes > 25 && currentMinutes < 30) {
        document.getElementById('clock').style.backgroundColor = "#ff0";
        document.getElementById('clock').style.color = "#000222";

    }
    if (date.getMinutes() > 30 && date.getMinutes() < 40) {
        document.getElementById('clock').style.backgroundColor = "#111000";
        document.getElementById('clock').style.color = "#ffffff";
    }


    if (date.getMinutes() > 39) {
        document.body.style.backgroundColor = "#0C81F6";
        document.body.style.color = "#fff";
        document.getElementById('clock').style.color = "#ffffff";


    }

}

function formatDisplay(value) {
    if (value < 10) {
        value = "0" + value;
    }
    return value;

}

function changeBackground() {

    // if (date.getMinutes() > 25) {
    //     document.getElementById('clock').style.backgroundColor = "#ff0";
    // }
}


window.onload = onReady;
