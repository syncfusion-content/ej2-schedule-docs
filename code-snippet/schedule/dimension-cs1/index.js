var scheduleObj = new ej.schedule.Schedule({
    width:'auto', height: 'auto',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

