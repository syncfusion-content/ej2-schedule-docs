var scheduleObj = new ej.schedule.Schedule({
    width: '100%', height: '550px',
    selectedDate: new Date(2018, 1, 15),
    currentView: 'WorkWeek',
    views: ['Week', 'WorkWeek', 'Month'],
    workDays: [1, 3, 5],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

