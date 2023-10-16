var calendarId = 'en.usa%23holiday@group.v.calendar.google.com';
var publicKey = 'AIzaSyBgbX_tgmVanBP4yafDPPXxWr70sjbKAXM';
var dataManager = new ej.data.DataManager({
    url: 'https://www.googleapis.com/calendar/v3/calendars/' + calendarId + '/events?key=' + publicKey,
    adaptor: new ej.data.WebApiAdaptor(),
    crossDomain: true
});
var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    eventSettings: { dataSource: dataManager },
    readonly: true,
    currentView: 'Month',
    timezone: 'UTC',
    dataBinding: function (e) {
        var items = e.result.items;
        var scheduleData = [];
        if (items.length > 0) {
            for (var i = 0; i < items.length; i++) {
                var event = items[i];
                var when = event.start.dateTime;
                var start = event.start.dateTime;
                var end = event.end.dateTime;
                if (!when) {
                    when = event.start.date;
                    start = event.start.date;
                    end = event.end.date;
                }
                scheduleData.push({
                    Id: event.id,
                    Subject: event.summary,
                    StartTime: new Date(start),
                    EndTime: new Date(end),
                    IsAllDay: !event.start.dateTime
                });
            }
        }
        e.result = scheduleData;
    }
});
scheduleObj.appendTo('#Schedule');

