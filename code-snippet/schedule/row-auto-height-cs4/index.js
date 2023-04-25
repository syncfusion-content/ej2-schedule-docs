var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
     views: [
        { option: 'Day' },
        { option: 'Week' },
        { option: 'WorkWeek' },
        { option: 'Month' } 
        ],
    currentView: 'Week',
    enablePersistence: true,
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

