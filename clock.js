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

    var timer = document.getElementById("clock");
    timer.innerHTML = currentTime;
    var t = setTimeout(createClock, 1000);

    if (currentMinutes > 0 && currentMinutes < 15) {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#111000";
        document.getElementById('clock').style.color = "#BE3144";

    }

    if (currentMinutes > 14 && currentMinutes < 30) {
        document.body.style.backgroundColor = "#FFCD38";
        document.getElementById('clock').style.color = "#000222";

    }
    if (currentMinutes > 29 && currentMinutes < 45) {
        document.body.style.backgroundColor = "#111000";
        document.body.style.color = "#fff";
        document.getElementById('clock').style.color = "#E4FFFE";
    }


    if (date.getMinutes() > 44 && date.getMinutes() < 59) {
        document.body.style.backgroundColor = "#3e3d3d";
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

window.onload = onReady;
