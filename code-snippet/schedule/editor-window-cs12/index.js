var scheduleObj = new ej.schedule.Schedule({
  width: '100%',
  height: '550px',
  selectedDate: new Date(2018, 1, 15),
  views: ['Day', 'Week', 'WorkWeek', 'Month'],
  currentView: 'Month',
  popupOpen: function (args) {
    if (args.type === 'EventContainer') {
      var instance = new ej.base.Internationalization();
      var date = instance.formatDate(args.data.date, { skeleton: 'MMMEd' });
      (args.element.querySelector('.e-header-date')).innerText = date;
      (args.element.querySelector('.e-header-day')).innerText = 'Event count: ' + args.data.event.length;
    }
  },
  eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

