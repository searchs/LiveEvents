// const fs = require("fs");

let events = [];

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

    // console.log(eventname, anchor, duration);

    created.innerText =
      "Event: " +
      eventname +
      " Anchor: " +
      anchor +
      " Duration: " +
      duration +
      "  minutes";
    event.preventDefault();
    generateJsonData(eventname, anchor, duration);
    eventsList.innerText +=
      "Event: " +
      eventname +
      " Anchor: " +
      anchor +
      " Duration: " +
      duration +
      " minutes \n";
  }
});
form.reset();

function generateJsonData(eventname, anchor, duration) {
  let session = new Object();
  session.eventName = eventname;
  session.anchor = anchor;
  session.duration = duration;

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
