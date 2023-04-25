window.getDateRange = function (value) {
    return value.toLocaleString('en-us', { month: 'long' }) + ' ' + value.getFullYear();
};

var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    dateRangeTemplate: '<div class="date-text">${getDateRange(data.startDate)}-${getDateRange(data.endDate)}</div>',
});
scheduleObj.appendTo('#Schedule');

