var data = [{
    Id: 3,
    Subject: 'Testing',
    StartTime: new Date(2018, 1, 11, 9, 0),
    EndTime: new Date(2018, 1, 11, 10, 0),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=3'
    },{
    Id: 4,
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

var Add = new ej.buttons.Button();
Add.appendTo('#btn1');
Add.element.onclick = function() {
var Data = [{
    Id: 1,
    Subject: 'Conference',
    StartTime: new Date(2018, 1, 15, 9, 0),
    EndTime: new Date(2018, 1, 15, 10, 0),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=2'
}];
scheduleObj.addEvent(Data);
Add.element.setAttribute('disabled', 'true');
};
var Edit = new ej.buttons.Button();
Edit.appendTo('#btn2');
Edit.element.onclick = function() {
var Data = new ej.data.DataManager(scheduleObj.getCurrentViewEvents()).executeLocal(new ej.data.Query().where(new ej.data.Predicate('RecurrenceID', 'equal', 3)));
Data[0].Subject = "Edited";
scheduleObj.saveEvent(Data[0],'EditOccurrence');
Edit.element.setAttribute('disabled', 'true');
};
var Delete = new ej.buttons.Button();
Delete.appendTo('#btn3');
Delete.element.onclick = function() {
var scheduleData = [{
    Id: 4,
    Subject: 'Vacation',
    RecurrenceID: 4,
    StartTime: new Date(2018, 1, 12, 11, 0),
    EndTime: new Date(2018, 1, 12, 12, 0),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=2'
}];
scheduleObj.deleteEvent(scheduleData,'DeleteSeries');
Delete.element.setAttribute('disabled', 'true');
};

