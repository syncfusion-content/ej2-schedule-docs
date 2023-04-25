var scheduleObj = new ej.schedule.Schedule({
    width: '100%', height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'WorkWeek'],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');
var scrollToHour = new ej.calendars.TimePicker({
    width: 100,
    value: new Date(2000, 0, 1, 9),
    format: 'HH:mm',
    change: function (args) {
        scheduleObj.scrollTo(args.text);
    }
});
scrollToHour.appendTo('#ScrollToHour');


