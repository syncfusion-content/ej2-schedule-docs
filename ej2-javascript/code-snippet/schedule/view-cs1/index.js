var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 14),
    views: ['Week', 'Month', 'TimelineWeek', 'TimelineMonth'],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

