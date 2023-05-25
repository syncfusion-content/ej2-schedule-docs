    var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 14),
    views: [{ option: 'TimelineWorkWeek',interval: 3, workDays: [1,3,5], dateFormat: 'dd-MMM-yyyy' }],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');



