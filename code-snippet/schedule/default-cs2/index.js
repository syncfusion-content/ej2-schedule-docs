var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: [
        { displayName: '3 Days', option: 'Day', interval: 3 },
        { displayName: '2 Weeks', option: 'Week', isSelected: true, interval: 2 },
        { displayName: '4 Months', option: 'Month', interval: 4 }
    ],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


