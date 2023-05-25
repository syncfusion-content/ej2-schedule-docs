var scheduleObj = new ej.schedule.Schedule({
    width: '100%', height: '550px',
    views: ['Day', 'TimelineWeek', 'WorkWeek', 'Month'],
    currentView: 'TimelineWeek',
    selectedDate: new Date(2018, 1, 15),
    actionBegin: function(args) {
        if ((args.requestType === 'eventCreate' || args.requestType === 'eventChange') && args.data.length > 0 || !(new ej.base.isNullOrUndefined(args.data))) {
            var eventData = args.data;
            var eventField = scheduleObj.eventFields;
            var startDate = ((args.data.length > 0) ? eventData[0][eventField.startTime] : eventData[eventField.startTime]);
            var endDate = ((args.data.length > 0) ? eventData[0][eventField.endTime] : eventData[eventField.endTime]);
            args.cancel = !scheduleObj.isSlotAvailable(startDate, endDate);
        }
    },
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

