var scheduleObj = new ej.schedule.Schedule({
    width:'650px', height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

