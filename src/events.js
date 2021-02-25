// load fs
const fs = require("fs");
// read the file
const rawData = fs.readFileSync("data.json");
let events = JSON.parse(rawData).data;

//REACT will display easily
events.map((ev) => {
  let singleEvent = {
    name: ev.eventName,
    duration: ev.eventDuration,
    anchor: ev.eventPerson
  };
  console.log(singleEvent);
  return singleEvent;
});

//   setInterval(countdown, 1000);
//   setInterval(populateEventsDetails, 3000);

var now = new Date();
var timeNow = now.toLocaleDateString();

//   var attentionAction = function () {
//     $("#progressbar").fadeOut(100);
//     $("#progressbar").fadeIn(50);
//   };

//   attentionAction();
//   setInterval(attentionAction, 3500);
// });
