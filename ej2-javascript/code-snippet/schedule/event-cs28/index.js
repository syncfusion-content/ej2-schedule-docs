var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    cssClass: 'custom-class',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

