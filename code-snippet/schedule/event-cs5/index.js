var data = [{
    Id: 1,
    Subject: 'Paris',
    StartTime: new Date(2018, 0, 28, 10, 0),
    EndTime: new Date(2018, 0, 28, 12, 30),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=8',
    RecurrenceException:'20180129T043000Z,20180131T043000Z,20180202T043000Z'
}];
var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2018, 0, 28),
    eventSettings: { dataSource: data }
});
scheduleObj.appendTo('#Schedule');

