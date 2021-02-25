let agenda = new Object();

var eventDateField = document.getElementById("event-date");

let events = [];
let liveEvents = [];
var eventsListed = document.getElementById("upcoming-sessions");
var liveScreen = document.getElementById("current-event");
var codeDump = document.getElementById("code-dump");

function showTime() {
  var d = new Date();
  var latestTime = d.toLocaleTimeString();

  if (events.length == 0) {
    liveScreen.innerText = latestTime;
    liveScreen.textContent = latestTime;
  } else {
    liveScreen.innerText = events[0].duration;

    // events.pop();
    liveEvents = events[0];
    console.log(liveEvents);
  }
  setTimeout(showTime, 1000);
}

showTime();

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
    // var status = "pending";

    generateJsonData(eventname, anchor, duration);
    if (events.length == 0) {
      created.innerText = "Waiting...";
      event.preventDefault();
    } else {
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
}

// form.reset();

console.log("Done for now");
function populateEventsList(evs) {
  evs.forEach((ev) => {
    eventsList.innerText += "Event: " + ev.eventName + "\n";
  });
}
