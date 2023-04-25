var data = [{
    Id: 1,
    Subject: 'Paris',
    StartTime: new Date(2018, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 17, 12, 30),
    IsAllDay: false
},{
    Id: 2,
    Subject: 'London',
    StartTime: new Date(2018, 1, 16, 12, 0),
    EndTime: new Date(2018, 1, 18, 13, 0),
    IsAllDay: false
}];
var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'Month', 'Agenda'],
    eventSettings: { dataSource: data, spannedEventPlacement: 'TimeSlot' }
});
scheduleObj.appendTo('#Schedule');

