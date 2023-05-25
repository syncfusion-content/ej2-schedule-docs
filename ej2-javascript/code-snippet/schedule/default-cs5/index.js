var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2021, 7, 15),
    showQuickInfo: false,
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    eventSettings: { dataSource: schedulerData },
    cellClick: function(args) {
        scheduleObj.openEditor(args, 'Add');
    },
    eventClick: function(args) {
        if (!args.event.RecurrenceRule) {
            scheduleObj.openEditor(args.event, 'Save');
        }
        else {
            scheduleObj.quickPopup.openRecurrenceAlert();
        }
    }
});
scheduleObj.appendTo('#Schedule');


