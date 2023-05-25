var instance = new ej.base.Internationalization();
window.getDateHeaderText = function (value) {
    return instance.formatDate(value, { skeleton: 'Ed' });
};
window.getYearDetails = function (value) {
    return 'Year: ' + instance.formatDate(value.date, { skeleton: 'y' });
};
window.getMonthDetails = function (value) {
    return 'Month: ' + instance.formatDate(value.date, { skeleton: 'M' });
};
window.getWeekDetails = function (value) {
    return 'Week ' + ej.schedule.getWeekNumber(value.date);
};

var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 0, 1),
    headerRows: [
        { option: 'Year', template: '#year-template' },
        { option: 'Month', template: '#month-template' },
        { option: 'Week', template: '#week-template' },
        { option: 'Date' }
    ],
    views: [{ option: 'TimelineMonth' }],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

