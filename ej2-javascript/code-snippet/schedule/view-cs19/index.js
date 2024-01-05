var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '380px',
    selectedDate: new Date(2023, 11, 15),
    views: [{ option: 'Month', maxEventsPerRow: 3 }],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


