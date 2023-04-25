var scheduleObj = new ej.schedule.Schedule({
    width: '100%', height: '550px',
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    selectedDate: new Date(2018, 1, 15),
    popupOpen: function(args) {
        if (args.type === 'Editor') {
          args.duration = 60;
        }
    },
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

