var customTimezoneData = [
  { Value: 'America/New_York', Text: '(UTC-05:00) Eastern Time' },
  { Value: 'UTC', Text: 'UTC' },
  { Value: 'Asia/Kolkata', Text: '(UTC+05:30) India Standard Time' }
];

ej.schedule.timezoneData.splice.apply(ej.schedule.timezoneData, [0,
 ej.schedule.timezoneData.length].concat(customTimezoneData));

var scheduleObj = new ej.schedule.Schedule({
  width: '100%',
  height: '550px',
  selectedDate: new Date(2018, 1, 11),
  views: ['Day', 'Week', 'Month'],
  eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

