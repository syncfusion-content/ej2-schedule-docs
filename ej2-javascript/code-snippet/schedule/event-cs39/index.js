var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2021, 3, 28),
    enableAllDayScroll: true,
    eventSettings: { dataSource: generateObject() }
});
scheduleObj.appendTo('#Schedule');

