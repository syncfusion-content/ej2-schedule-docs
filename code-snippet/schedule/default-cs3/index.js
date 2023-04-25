var scheduleObj = new ej.schedule.Schedule({
  width: '100%',
  height: '550px',
  selectedDate: new Date(2018, 1, 15),
  eventSettings: { dataSource: scheduleData },
  actionBegin: function (args) {
    if (args.requestType == 'eventChange') {
      var weekEnds = [0, 6];
      var data = args.data;
      var weekDay = weekEnds.indexOf(data.StartTime.getDay()) >= 0;
      var workHours = ((parseInt(scheduleObj.workHours.start.toString().slice(0, 2), 10) <= data.StartTime.getHours())
        && (parseInt(scheduleObj.workHours.end.toString().slice(0, 2), 10)) >= data.StartTime.getHours());
      if (weekDay || !workHours) {
        args.cancel = true;
      }
    }
  }
});
scheduleObj.appendTo('#Schedule');


