var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    currentView: 'Day',
    selectedDate: new Date(2018, 1, 15),
    views: [{ option: 'Day', interval: 2, startHour: '09:30', endHour: '18:00', timeScale: {enable: true, slotCount: 5}}],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


