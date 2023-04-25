var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: [{ option: 'Day', interval: 2, displayName: '2 Days', startHour: '09:30', endHour: '18:00', timeScale: {enable: true, slotCount: 5}}, { option: 'Week', displayName: '2 Weeks', interval: 2, showWeekend: false, isSelected: true }],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


