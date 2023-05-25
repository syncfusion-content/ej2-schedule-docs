  var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '550px',
        selectedDate: new Date(2018, 1, 15),
        eventSettings: { dataSource: eventData },
        eventClick: OnEventClick
    });
    scheduleObj.appendTo('#Schedule');
    var btn = new ej.buttons.Button();
    btn.appendTo('#clear');
    document.getElementById('clear').onclick = () => {
        document.getElementById('EventLog').innerHTML = '';
    };
    function OnEventClick(args) {
        var event = scheduleObj.getEventDetails(args.element);
        appendElement(event.Subject +'<hr>');
    }
    function appendElement(html) {
        var span = document.createElement('span');
        span.innerHTML = html;
        var log = document.getElementById('EventLog');
        log.insertBefore(span, log.firstChild);
    }

