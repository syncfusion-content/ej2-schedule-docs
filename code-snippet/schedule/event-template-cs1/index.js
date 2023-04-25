var instance = new ej.base.Internationalization();
window.getTimeString = function (value) {
    return instance.formatDate(value, { skeleton: 'hm' });
};
var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '500px',
    readonly: true,
    selectedDate: new Date(2018, 1, 15),
    eventSettings: {
        dataSource: webinarData,
        template: '#apptemplate'
    }
});
scheduleObj.appendTo('#Schedule');

