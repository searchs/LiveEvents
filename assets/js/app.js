console.trace("Event Streams Running");
//Handcrafted

const logger = (msg) => {
  console.log(msg);
};

function onReady() {
  var clk = new createClock();
  document.getElementById("clock").innerText = clk;
  // countDown(10);
}

const eventList = [];

var currentHours;
var currentMinutes;
var currentSeconds;
var createClock = function () {
  var date = new Date();
  currentHours = formatDisplay(date.getHours());
  currentMinutes = formatDisplay(date.getMinutes());
  currentSeconds = formatDisplay(date.getSeconds());
  var currentTime = currentHours + ":" + currentMinutes + ":" + currentSeconds;

  var timer = document.getElementById("clock");
  timer.innerHTML = currentTime;
  var t = setTimeout(createClock, 1000);

  if (currentMinutes === 0 || (currentMinutes > 0 && currentMinutes < 15)) {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000111";
    document.getElementById("clock").style.color = "#0E7CF4";
  }

  if (currentMinutes > 14 && currentMinutes < 30) {
    document.body.style.backgroundColor = "#FFCD38";
    document.getElementById("clock").style.color = "#000111";
    document.getElementById("upcoming").style.background = "#000222";
  }
  if (currentMinutes > 29 && currentMinutes < 45) {
    document.body.style.backgroundColor = "#111000";
    document.body.style.color = "#fff";
    document.getElementById("clock").style.color = "#E4FFFE";
    document.getElementById("upcoming").style.background = "#0E7CF4";
  }

  if (date.getMinutes() > 44 && date.getMinutes() < 59) {
    // document.body.style.backgroundColor = "#3e3d3d"; Grey
    document.body.style.backgroundColor = "#00AD7C";
    document.body.style.color = "#fff";
    document.getElementById("clock").style.color = "#ffffff";
    document.getElementById("upcoming").style.background = "#000111";
  }

  displayUpcoming();
  populateNextTitle();
};

function countDown(num) {
  for (var index = num; index > 0; index--) {
    var cntDown = document.getElementById("countdown");
    cntDown.innerHTML = index;
    // console.log(index);
  }
  // var c = setTimeout(countDown(num), 5000);
}

function formatDisplay(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}

var todoList = [];
function rememberTo(task) {
  todoList.push(task);
}

function whatIsNext() {
  todoList.shift();
}

function urgentlyRememberTo(task) {
  todoList.unshift(task);
}

function getNextEvent() {
  eventList.shift();

  //     if(eventList.length < 1) {
  //     return "No more events in this session";
  //     }
  //     else {

  //     return eventList[0];
  //     }
}

// var event = {} || { "title": "First event title", "anchor": "Admin", "duration": 10 };
const event = {
  title: "Please Enter Event title and Save.",
  anchor: "Hughe Dorricks",
  duration: 10
};
eventList.push(event);

function createNewEvent() {
  var title = document.getElementById("event-title").value;
  var anchor = document.getElementById("event-anchor").value;
  var duration = document.getElementById("event-duration").value;

  if (
    title.trim().length === 0 ||
    anchor.trim().length === 0 ||
    duration.trim().length === 0
  ) {
    console.log("Select value.  Enter a value");
    alert("Please select an option!- Title and Anchor and Duration.");
  } else {
    event.title = title;
    event.anchor = anchor;
    event.duration = duration;

    eventList.push(event);
    console.log(eventList);
  }
}

function updateNextEvent() {
  var eventTitle = document.getElementById("next-event");
  var eventAnchor = document.getElementById("next-anchor");
}

function collectEventName() {
  var title = document.getElementById("event-title").value;

  if (title.trim().length === 0) {
    console.log("Empty value.  Enter a value");
  } else {
    event.title = title;
    eventList.push(event);
    console.log(eventList);
  }
}

function displayUpcoming() {
  var upcomingList = document.getElementById("display-upcoming");
  // var events = $.map(inputs, function(el) { return el.name });
  if (eventList.length === 0) {
    upcomingList.innerHTML = "No UPCOMING Event";
  } else {
    upcomingList.innerHTML = JSON.stringify(eventList[0].title);
    // eventList.forEach(function(e) {
    // upcomingList.innerHTML = JSON.stringify(e.title);
    // });
  }
}

function populateNextTitle() {
  var nextTitle = document.getElementById("next-event");
  nextTitle.innerHTML = eventList[0].title;
}

function addNotice() {
  var noticeValue = document.getElementById("notice").value;
  var noticeMessage = document.getElementById("notice-message");

  if (noticeValue.trim().length === 0) {
    noticeMessage.innerHTML = "<h3> No Urgent Message. Thanks! </h3>";
  } else {
    var noticeBoard = document.getElementById("notice-message");
    noticeBoard.style.color = "#ffffff";
    noticeBoard.style.background = "#CA1500";
    noticeBoard.setAttribute("class", "notification is-danger blink_me");

    noticeMessage.innerHTML += noticeValue;
  }
}

addNotice();

window.onload = onReady;
