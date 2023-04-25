var scheduleObj = new ej.schedule.Schedule({
    width: '100%', height: '550px',
    selectedDate: new Date(2018, 1, 15),
    headerRows: [{ option: 'Week' }, { option: 'Date' }, { option: 'Hour' }],
    currentView: 'TimelineMonth',
    views: ['TimelineDay', 'TimelineWeek', 'TimelineMonth'],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

