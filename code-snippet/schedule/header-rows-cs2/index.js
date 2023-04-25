var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 11, 31),
    headerRows: [{ option: 'Year' }, { option: 'Month' }],
    currentView: 'TimelineMonth',
    views: [{ option: 'TimelineMonth', interval: 24 }],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

