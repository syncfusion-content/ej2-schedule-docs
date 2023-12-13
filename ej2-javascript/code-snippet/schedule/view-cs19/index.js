var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2023, 11, 15),
    views: [{ option: 'Month', maxEventsPerRow: 3 },
            { option: 'TimelineMonth', maxEventsPerRow: 3 },
            { option: 'TimelineYear', displayName: 'Horizontal Timeline Year', maxEventsPerRow: 3 },
            { option: 'TimelineYear', displayName: 'Vertical Timeline Year', orientation: 'Vertical', maxEventsPerRow: 3 }],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


