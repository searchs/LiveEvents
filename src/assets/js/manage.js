// const fs = require("fs");
let agenda = new Object();

var eventDateField = document.getElementById("event-date");

let events = [];
var eventsListed = document.getElementById("upcoming-sessions");
var liveScreen = document.getElementById("current-event");
// var d = new Date();
// var n = d.toLocaleTimeString();

function showTime() {
  var d = new Date();
  var latestTime = d.toLocaleTimeString();
  // return (liveScreen.innerText = latestTime);
  if (events.length == 0) {
    liveScreen.innerText = latestTime;
    liveScreen.textContent = latestTime;
  } else {
    liveScreen.innerText = events[0].duration;
  }
  setTimeout(showTime, 1000);
}

showTime();
// form.reset();
// setTimeout(setLatestTime, 1000);
var eventName = document.getElementById("eventNameInput");
var anchorName = document.getElementById("anchorNameInput");
var eventDuration = document.getElementById("eventDurationInput");
var created = document.getElementById("upcoming");
var eventsList = document.getElementById("events-listed");

var form = document.getElementById("create-form");

form.addEventListener("submit", function (event) {
  if (!eventName.value || !anchorName || !eventDuration) {
    alert("Fill in session details!");
  } else {
    var eventname = eventName.value;
    var anchor = anchorName.value;
    var duration = eventDuration.value;
    var status = "pending";

    // console.log(eventname, anchor, duration);
    generateJsonData(eventname, anchor, duration);
    if (events.length === 0) {
      created.innerText = "Waiting...";
      event.preventDefault();
    } else {
      console.log(events);
      created.innerText = `${events[0].eventName} - Anchor: ${events[0].anchor} \n`;
      event.preventDefault();
    }
  }
});

function generateJsonData(eventname, anchor, duration) {
  let session = new Object();
  session.eventName = eventname;
  session.anchor = anchor;
  session.duration = duration;
  session.status = "pending";

  events.push(session);
  console.log(events);
  // return session;
}

form.reset();

console.log("Done for now");
function populateEventsList(evs) {
  evs.forEach((ev) => {
    eventsList.innerText += "Event: " + ev.eventName + "\n";
  });
}
