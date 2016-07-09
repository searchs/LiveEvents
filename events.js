$(document).ready(function() {
    'use strict';

    var eventsToday = [{
        eventName: 'Welcome Newbies',
        eventPerson: 'Jenny',
        eventDuration: 10
    }, {
        eventName: 'HTML5 Session',
        eventPerson: 'Ray',
        eventDuration: 15
    }, {
        eventName: 'Python Session',
        eventPerson: 'Pete',
        eventDuration: 15
    }, {
        eventName: 'Advanced Python',
        eventPerson: 'Tom',
        eventDuration: 15
    }, {
        eventName: 'Java Basics',
        eventPerson: 'Hina',
        eventDuration: 15
    }, {
        eventName: 'NodeJS Starts',
        eventPerson: 'Vithun',
        eventDuration: 15
    }, {
        eventName: 'NodeJS Advanced',
        eventPerson: 'Roberts',
        eventDuration: 15
    }];

    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }

    var populateEventsDetails = function() {

        var f = document.getElementById('currentSession');

        // eventsToday.forEach(function(e) {

        //     f.innerHTML = '';
        //     f.innerHTML = e.eventPerson;
        //     console.log('Can you see the presenter\'s name? ' + e.eventPerson);
        //     sleep(5000);
        //     $('.currentSession').fadeOut(500).fadeIn(500);
        // });


        for (var i = 0; i < eventsToday.length; i++) {
            console.log(eventsToday[i])

            // f.innerHTML = '';
            f.innerHTML = eventsToday[i].eventName;
            //     console.log('Can you see the presenter\'s name? ' + e.eventPerson);
            sleep(3000);
        }
    }

    populateEventsDetails();
    setInterval(populateEventsDetails, 30000);

    var clock = function() {
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
        var clockDiv = document.getElementById('eventTime');
        clockDiv.innerText = currentTime;

    };

    clock();

    var blinkDateTime = function() {
        var speakBox = document.getElementById('blinkDateTime');
        speakBox.innerText = new Date();
        $('#blinkDateTime').fadeOut(500);
        $('#blinkDateTime').fadeIn(500);

    };

    blinkDateTime();

    //set clock refresh rate
    setInterval(clock, 1000);
    setInterval(blinkDateTime, 3000);

    var attentionAction = function() {
        $('#progressbar').fadeOut(100);
        $('#progressbar').fadeIn(50);
    };

    attentionAction();
    setInterval(attentionAction, 3500);


});
