var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['TimelineDay', 'Week', 'WorkWeek', 'Month'],
    eventSettings: {
        dataSource: scheduleData,
        enableTooltip: true
    }
});
scheduleObj.appendTo('#Schedule');

