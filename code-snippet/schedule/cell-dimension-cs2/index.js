var scheduleObj = new ej.schedule.Schedule({
    width: '100%', height: '550px',
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    selectedDate: new Date(2018, 1, 15),
    cssClass: 'schedule-cell-dimension',
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

