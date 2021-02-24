// const fs = require("fs");

let events = [];

let liveScreen = document.getElementById("current-event");
// var d = new Date();
// var n = d.toLocaleTimeString();

function showTime() {
  var d = new Date();
  var latestTime = d.toLocaleTimeString();
  // return (liveScreen.innerText = latestTime);
  liveScreen.innerText = latestTime;
  liveScreen.textContent = latestTime;

  setTimeout(showTime, 1000);
}

showTime();
// form.reset();
// setTimeout(setLatestTime, 1000);
var eventName = document.getElementById("eventNameInput");
var anchorName = document.getElementById("anchorNameInput");
var eventDuration = document.getElementById("eventDurationInput");
var created = document.getElementById("created");
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
    if (events.length < 1) {
      created.innerText = "Nothing Bro!";
      event.preventDefault();
    } else {
      console.log(events);
      created.innerText =
        "Event: " +
        events[0].eventName +
        " Anchor: " +
        events[0].anchor +
        " Duration: " +
        events[0].duration +
        " Status: " +
        status +
        "\n";
      event.preventDefault();
    }

    // created.innerText =
    //   "Event: " +
    //   eventname +
    //   " Anchor: " +
    //   anchor +
    //   " Duration: " +
    //   duration +
    //   "  minutes";
    // event.preventDefault();
    // generateJsonData(eventname, anchor, duration);
    // eventsList.innerText +=
    //   "Event: " +
    //   eventname +
    //   " Anchor: " +
    //   anchor +
    //   " Duration: " +
    //   duration +
    //   " Status: " +
    //   status +
    //   "\n";
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
