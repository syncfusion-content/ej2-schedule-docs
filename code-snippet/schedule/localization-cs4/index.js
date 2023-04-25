var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'WorkWeek'],
    timeFormat: "HH:mm",
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


