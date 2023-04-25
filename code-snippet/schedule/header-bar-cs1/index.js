var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'WorkWeek'],
    showHeaderBar: false,
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


