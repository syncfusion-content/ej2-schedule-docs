var intl = new ej.base.Internationalization();
var scheduleObj = new ej.schedule.Schedule({
    width: '100%', height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'TimelineWorkWeek'],
    eventSettings: { dataSource: scheduleData },
    created: function() {
      scheduleObj.scrollTo(intl.formatDate(new Date(), { skeleton: 'Hm' }));
    }
});
scheduleObj.appendTo('#Schedule');

