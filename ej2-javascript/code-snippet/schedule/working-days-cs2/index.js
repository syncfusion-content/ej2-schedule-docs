var scheduleObj = new ej.schedule.Schedule({
    width: '100%', height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'TimelineMonth'],
    showWeekend: false,
    workDays: [1, 3, 4, 5],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

