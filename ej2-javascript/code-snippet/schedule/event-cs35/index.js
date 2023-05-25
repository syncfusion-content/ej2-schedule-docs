var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    currentView: 'TimelineMonth',
    selectedDate: new Date(2018, 1, 15),
    views: ['TimelineWeek', 'TimelineMonth'],
    eventSettings: {
        dataSource: scheduleData,
        enableMaxHeight: true,
        enableIndicator: false
    }
});
scheduleObj.appendTo('#Schedule');

