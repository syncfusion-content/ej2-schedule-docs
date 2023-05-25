var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 0, 1),
    headerRows: [
        { option: 'Month' },
        { option: 'Date' }
    ],
    views: [{ option: 'TimelineMonth', interval: 12 }],
    eventSettings: { dataSource: eventData }
});
scheduleObj.appendTo('#Schedule');

