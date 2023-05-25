var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    views: ['Day','Week', 'Month'],
    selectedDate: new Date(2018, 1, 17),
    timezone: 'America/New_York',
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

