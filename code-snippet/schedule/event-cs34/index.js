var isReadOnly = function (data) {
    return data.ReadOnly || (data.EndTime < scheduleObj.selectedDate);
};
var scheduleObj = new ej.schedule.Schedule({
    width: '100%', height: '550px',
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    selectedDate: new Date(2018, 1, 15),
    eventRendered: function(args) {
        if (isReadOnly(args.data)) {
            args.element.classList.add('e-past-app');
        }
    },
    eventSettings: { dataSource: scheduleData }    
});
scheduleObj.appendTo('#Schedule');

