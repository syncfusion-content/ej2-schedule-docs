var scheduleObj = new ej.schedule.Schedule({
    width: '100%', height: '550px',
    selectedDate: new Date(2018, 1, 15),
    showQuickInfo: false,
    views: ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

