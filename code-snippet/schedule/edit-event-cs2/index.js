var data = [{
    Id: 1,
    Subject: 'Testing',
    StartTime: new Date(2018, 1, 11, 9, 0),
    EndTime: new Date(2018, 1, 11, 10, 0),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=3'
    },{
    Id: 2,
    Subject: 'Vacation',
    StartTime: new Date(2018, 1, 12, 11, 0),
    EndTime: new Date(2018, 1, 12, 12, 0),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=2'
}];

var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: data }
});
scheduleObj.appendTo('#Schedule');

var edit = new ej.buttons.Button();
edit.appendTo('#edit');
edit.element.onclick = function() {
    var data = new ej.data.DataManager(scheduleObj.getCurrentViewEvents()).executeLocal(new ej.data.Query().where('RecurrenceID', 'equal', 1))[0];
    data.Subject = "Edited";
    scheduleObj.saveEvent(data, 'EditOccurrence');
    edit.element.setAttribute('disabled', 'true');
};

