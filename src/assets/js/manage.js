let agenda = new Object();
agenda.eventDate = new Date().toLocaleDateString();

console.log("Date: " + agenda.eventDate);

var eventDateField = document.getElementById("event-date");

let events = [];
let liveEvents = [];
var eventsListed = document.getElementById("upcoming-sessions");
var liveScreen = document.getElementById("current-event");

function showTime() {
  var d = new Date();
  var latestTime = d.toLocaleTimeString();
  if (events.length == 0) {
    liveScreen.innerText = latestTime;
    liveScreen.textContent = latestTime;
  } else {
    liveScreen.innerText = events[0].duration + ":00";
    liveScreen.textContent = events[0].duration + ":00";
    liveEvents = events[0];
    console.log(liveEvents);
  }
  // startTimer();
  var presentTime = liveScreen.innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(timeArray[1] - 1);
  if (s == 59 && m > 0) {
    m = m - 1;
  }
  //if(m<0){alert('timer completed')}

  // document.getElementById("timer").innerHTML = m + ":" + s;
  liveScreen.innerHTML = m + ":" + s;
  console.log(m);

  setTimeout(showTime, 1000);
  startTimer();
}

showTime();

var eventName = document.getElementById("eventNameInput");
var anchorName = document.getElementById("anchorNameInput");
var eventDuration = document.getElementById("eventDurationInput");
var created = document.getElementById("upcoming");
var eventsList = document.getElementById("events-listed");
var eventDate =
  document.getElementById("eventDateInput").value || agenda.eventDate;

var form = document.getElementById("create-form");

form.addEventListener("submit", function (event) {
  if (!eventName.value || !anchorName || !eventDuration) {
    alert("Fill in session details!");
  } else {
    var eventname = eventName.value;
    var anchor = anchorName.value;
    var duration = eventDuration.value;
    var eventdate = eventDate;
    // var status = "pending";

    generateJsonData(eventname, anchor, duration, eventdate);
    if (events.length == 0) {
      created.innerText = latestTime;
      event.preventDefault();
    } else {
      created.innerText = `${events[0].eventName} - ${events[0].anchor}\n`;
      event.preventDefault();
    }
  }
});

// document.getElementById("timer").innerHTML = 003 + ":" + 20;

function startTimer() {
  // var presentTime = document.getElementById("timer").innerHTML;
  var presentTime = liveScreen.innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(timeArray[1] - 1);
  if (s == 59 && m > 0) {
    m = m - 1;
  }
  //if(m<0){alert('timer completed')}

  // document.getElementById("timer").innerHTML = m + ":" + s;
  liveScreen.innerHTML = m + ":" + s;
  console.log(m);
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  } // add zero in front of numbers < 10
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}
const countdown = (countTime) => {
  do {
    var timeInMilli = countTime * 1000 * 60;
    console.log(countTime);
    countTime -= 600;
  } while (timeInMilli > 0);
};

function generateJsonData(eventname, anchor, duration, eventdate) {
  let session = new Object();
  session.eventName = eventname;
  session.anchor = anchor;
  session.duration = duration;
  session.status = "pending";
  session.eventdate = eventdate;

  events.push(session);
  console.log(events);
}

// form.reset();

console.log("Done for now");
function populateEventsList(evs) {
  evs.forEach((ev) => {
    eventsList.innerText += "Event: " + ev.eventName + "\n";
  });
}
