var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 14),
    views: [{ option: 'MonthAgenda', showWeekend: false, workDays: [1,2,3] }],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

