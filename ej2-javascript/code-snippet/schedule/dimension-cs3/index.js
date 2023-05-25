var scheduleObj = new ej.schedule.Schedule({
    width:'100%', height: '100%',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

