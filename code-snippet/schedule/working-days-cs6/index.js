var scheduleObj = new ej.schedule.Schedule({
    width: '100%', height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'WorkWeek'],
    startHour: '07:00',
    endHour: '18:00',
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

