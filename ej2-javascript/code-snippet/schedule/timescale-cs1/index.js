
window.majorSlotTemplate = function (date) {
    var instance = new ej.base.Internationalization();
    return instance.formatDate(date, { skeleton: 'hm' });
};
window.minorSlotTemplate = function (date) {
    var instance = new ej.base.Internationalization();
    return instance.formatDate(date, { skeleton: 'ms' }).replace(':00', '');
};
var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'WorkWeek'],
    timeScale: {
        enable: true,
        interval: 60,
        slotCount: 6,
        majorSlotTemplate: '#majorSlotTemplate',
        minorSlotTemplate: '#minorSlotTemplate'
    },
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


