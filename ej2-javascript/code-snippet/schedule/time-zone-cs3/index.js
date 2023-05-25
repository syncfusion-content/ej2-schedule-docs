var data = new ej.base.extend([], fifaEventsData, null, true);
var timezone = new ej.schedule.Timezone();
for (var i = 0; i < data.length; i++) {
    data[i].StartTime = timezone.removeLocalOffset(data[i].StartTime);
    data[i].EndTime = timezone.removeLocalOffset(data[i].EndTime);
}
var scheduleObj = new ej.schedule.Schedule({
    width: '100%', height: '550px',
    selectedDate: new Date(2018, 5, 17),
    views: ['Day','Week', 'Month'],
    timezone: 'UTC',
    eventSettings: { dataSource: data }
});
scheduleObj.appendTo('#Schedule');

