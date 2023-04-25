var scheduleObj = new ej.schedule.Schedule({
    width: '100%', height: '550px',
    selectedDate: new Date(2018, 11, 31),
    startHour: '09:00',
    endHour: '13:00',
    headerRows: [
        { option: 'Year' },
        { option: 'Month' },
        { option: 'Week' },
        { option: 'Date' },
        { option: 'Hour' }
    ],
    views: ['TimelineWeek'],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

