var data = [{
    Id: 1,
    Subject: 'Paris',
    StartTime: new Date(2018, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 15, 12, 30)
},{
    Id: 2,
    Subject: 'Scrum Meeting',
    StartTime: new Date(2018, 1, 11, 9, 30),
    EndTime: new Date(2018, 1, 11, 11, 0)
},{
    Id: 3,
    Subject: 'Meeting',
    StartTime: new Date(2018, 1, 13, 10, 0),
    EndTime: new Date(2018, 1, 13, 10, 30)
},{
    Id: 4,
    Subject: 'Inline Editer Window',
    StartTime: new Date(2018, 1, 13, 11, 0),
    EndTime: new Date(2018, 1, 13, 12, 0)
},{
    Id: 5,
    Subject: 'Validated',
    StartTime: new Date(2018, 1, 17, 11, 0),
    EndTime: new Date(2018, 1, 17, 12, 30)
}];
var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 11),
    views: ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'],
    eventSettings: { dataSource: data }
});
scheduleObj.appendTo('#Schedule');


