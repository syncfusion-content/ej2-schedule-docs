var instance = new ej.base.Internationalization();
window.getTimeString = function (value) {
    return instance.formatDate(value, { skeleton: 'hm' });
};
var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '350px',
    selectedDate: new Date(2018, 1, 15),
    views: [{ option: 'Agenda', eventTemplate: '<div class="template-wrap"><div class="subject">${Subject}</div><div class="time">${getTimeString(data.StartTime)} - ${getTimeString(data.EndTime)}</div></div>', allowVirtualScrolling: true }],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

