// load fs
const fs = require("fs");
// read the file
const rawData = fs.readFileSync("data.json");
let events = JSON.parse(rawData).data;
// console.log(eventData);

// $(document).ready(function () {

//   // function sleep(millisec) {
//   //   var start = new Date().getTime();
//   //   for (var i = 0; i < 1e7; i++) {
//   //     if (new Date().getTime() - start > millisec) {
//   //       break;
//   //     }
//   //   }
//   // }

//   var populateEventsDetails = () => {
//     var f = document.getElementById("currentSession");

//     //map every event details
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

//     console.log(eventData);

// eventData.forEach(function (e) {
//   f.innerHTML = "";
//   f.innerHTML = e.eventName + " Duration: " + e.eventDuration;
//   $(".currentSession").show(5000);
// });

//   const countdown = (countTime) => {
//     do {
//       var timeInMilli = countTime * 1000 * 60;
//       console.log(countTime);
//       countTime -= 600;
//     } while (timeInMilli > 0);
//   };

//   populateEventsDetails();
//   setInterval(countdown, 1000);
//   setInterval(populateEventsDetails, 3000);

//   var clock = function () {
//     var now = new Date();
//     var currentTime, hr, mn, sc;

//     var checkDigits = function (timedigits) {
//       if (timedigits !== "" && timedigits < 10) {
//         return "0" + timedigits;
//       } else if (timedigits === 0) {
//         return "00";
//       } else {
//         return timedigits;
//       }
//     };

//     hr = checkDigits(now.getHours());
//     mn = checkDigits(now.getMinutes());
//     sc = checkDigits(now.getSeconds());

//     currentTime = hr + ":" + mn + ":" + sc;
//     var clockDiv = document.getElementById("eventTime");
//     clockDiv.innerText = currentTime;
//   };

//   clock();

//   var blinkDateTime = function () {
//     var speakBox = document.getElementById("blinkDateTime");
//     speakBox.innerText = new Date();
//     $("#blinkDateTime").fadeOut(500).fadeIn(500);
//     // $("#blinkDateTime").fadeIn(500);
//   };

//   blinkDateTime();

//   //set clock refresh rate
//   setInterval(clock, 1000);
//   setInterval(blinkDateTime, 3000);

//   var attentionAction = function () {
//     $("#progressbar").fadeOut(100);
//     $("#progressbar").fadeIn(50);
//   };

//   attentionAction();
//   setInterval(attentionAction, 3500);
// });
