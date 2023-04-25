var scheduleObj = new ej.schedule.Schedule({
    height: '450px',
    rowAutoHeight: true,
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: scheduleData },
    currentView: 'TimelineWeek',
    views: [
        { option: 'TimelineDay' },
        { option: 'TimelineWeek' },
        { option: 'TimelineWorkWeek' },
        { option: 'TimelineMonth' },
        { option: 'Agenda' }
    ],
});
scheduleObj.appendTo('#Schedule');

