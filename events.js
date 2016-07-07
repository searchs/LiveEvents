$(document).ready(function() {
    'use strict';
    console.trace('App starts');

    var eventsToday = [];
    var clock = function() {
        console.trace('Clock starts...');
        var now = new Date();
        var currentTime, hr, mn, sc;

        var checkDigits = function(timedigits) {
            if (timedigits !== '' && timedigits < 10) {
                return '0' + timedigits;
            } else if (timedigits === 0) {
                return '00';
            } else {
                return timedigits;
            }
        };

        hr = checkDigits(now.getHours());
        mn = checkDigits(now.getMinutes());
        sc = checkDigits(now.getSeconds());

        currentTime = hr + ':' + mn + ':' + sc;
        var clockDiv = document.getElementById('currentSession');
        clockDiv.innerText = currentTime;

    };

    clock();

    var speak = function() {
        console.trace('Speak function with Current Date and time...');
        var speakBox = document.getElementById('speak');
        speakBox.innerText = new Date();
        $('#speak').fadeOut(500);
        $('#speak').fadeIn(500);


    };

    speak();

    //set clock refresh rate
    setInterval(clock, 1000);
    setInterval(speak, 3000);

    var eventObject = {
        name: '',
        duration: 10,
        person: ''

    };

    var attentionAction = function() {
        $('#progressbar').fadeOut(100);
        $('#progressbar').fadeIn(50);
    };

    attentionAction();
    setInterval(attentionAction, 3500);

    // var createEvent = function() {
    //     var sel_name = $("select.event_list").val();
    //     console.log(sel_name);
    //     var sel_person = $("select.person_list").val();
    //     console.log(sel_person);

    //     // var eventObj = new eventObject();
    //     // eventObj.name =

    //     return eventObject;
    // }

    $(function() {
        console.trace("Grab value in selected field is now in progress....");
        eventsToday.push('Welcome Newbies');
        var eventList = $('#sel_event');
        eventList.bind('click', function() {
            var eventValue = $("select.event_list").val();
            console.log(eventValue);
        }, false);


    });

    console.log(eventsToday);
});
