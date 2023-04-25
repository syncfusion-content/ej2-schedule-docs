var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: blockData },
    views: ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda']
});
scheduleObj.appendTo('#Schedule');

