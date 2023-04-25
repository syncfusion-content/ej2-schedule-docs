var scheduleObj = new ej.schedule.Schedule({
    width: '100%', height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: [{ option: 'Week', dateFormat: 'dd-MMM-yyyy' }, { option: 'Month', showWeekend: false, readonly: true }],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


