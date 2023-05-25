  var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '550px',
        selectedDate: new Date(2018, 1, 15),
        eventSettings: { dataSource: eventData },
        dataBound: onDataBound
    });
    scheduleObj.appendTo('#Schedule');
    var btn = new ej.buttons.Button();
    btn.appendTo('#clear');
    document.getElementById('clear').onclick = () => {
        document.getElementById('EventLog').innerHTML = '';
    };
    function onDataBound(args) {
        var event = scheduleObj.getEvents();
        appendElement('Events present on scheduler <b>' + event.length +'<b><hr>');
    }
    function appendElement(html) {
        var span = document.createElement('span');
        span.innerHTML = html;
        var log = document.getElementById('EventLog');
        log.insertBefore(span, log.firstChild);
    }

