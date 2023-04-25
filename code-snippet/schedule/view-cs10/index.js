var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: [{ option: 'TimelineDay', startHour: '09:00', endHour: '15:30' }],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


