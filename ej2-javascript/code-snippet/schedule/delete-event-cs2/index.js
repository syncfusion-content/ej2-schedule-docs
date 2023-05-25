var data = [{
    Id: 3,
    Subject: 'Testing',
    StartTime: new Date(2018, 1, 11, 9, 0),
    EndTime: new Date(2018, 1, 11, 10, 0),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=3'
}, {
    Id: 4,
    Subject: 'Vacation',
    StartTime: new Date(2018, 1, 12, 11, 0),
    EndTime: new Date(2018, 1, 12, 12, 0),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=2'
}];

var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: data }
});
scheduleObj.appendTo('#Schedule');
var remove = new ej.buttons.Button();
remove.appendTo('#delete');
remove.element.onclick = function() {
var scheduleData = [{
    Id: 2,
    Subject: 'Vacation',
    RecurrenceID: 4,
    StartTime: new Date(2018, 1, 12, 11, 0),
    EndTime: new Date(2018, 1, 12, 12, 0),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=2'
}];
scheduleObj.deleteEvent(scheduleData,'DeleteSeries');
};

