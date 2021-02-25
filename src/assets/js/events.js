// load fs
const fs = require("fs");
// read the file
const rawData = fs.readFileSync("data.json");
let events = JSON.parse(rawData).data;

// $(document).ready(function () {

// function sleep(millisec) {
//   var start = new Date().getTime();
//   for (var i = 0; i < 1e7; i++) {
//     if (new Date().getTime() - start > millisec) {
//       break;
//     }
//   }
// }

//  map every event details
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

var clock = function () {
  var now = new Date();
  var currentTime = now.toLocaleDateString();
  return currentTime;
};

clock();
//   //set clock refresh rate
setInterval(clock, 1000);

//   var attentionAction = function () {
//     $("#progressbar").fadeOut(100);
//     $("#progressbar").fadeIn(50);
//   };

//   attentionAction();
//   setInterval(attentionAction, 3500);
// });
