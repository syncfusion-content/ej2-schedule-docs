var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: [{ option: 'WorkWeek', workDays: [2,3,5] }],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

