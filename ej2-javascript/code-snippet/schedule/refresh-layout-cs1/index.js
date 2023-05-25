var data = [
    {
        Id: 1,
        Subject: 'Testing',
        StartTime: new Date(2021, 10, 16, 10, 0),
        EndTime: new Date(2021, 10, 16, 12, 0),
        IsAllDay: false
    }, {
        Id: 2,
        Subject: 'Vacation',
        StartTime: new Date(2021, 10, 18, 10, 0),
        EndTime: new Date(2021, 10, 18, 12, 0),
        IsAllDay: false
    }
];

var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2021, 10, 15),
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    eventSettings: {
        dataSource: data
    }
});
scheduleObj.appendTo('#Schedule');

var btn = new ej.buttons.Button({
    cssClass: 'e-info'
});
btn.appendTo('#btn1');
btn.element.onclick = function() {
    scheduleObj.refreshLayout();
};

