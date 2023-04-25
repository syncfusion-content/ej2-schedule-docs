var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    enableRtl: true,
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'WorkWeek'],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


