var scheduleData = new ej.base.extend([], window.eventsData, null, true);
var template = '<div class="tooltip-wrap">' +
        '<div class="content-area"><div class="name">${Subject}</></div>' +
        '${if(City !== null && City !== undefined)}<div class="city">${City}</div>${/if}' +
        '<div class="time">From : ${StartTime.toLocaleString()} </div>' +
        '<div class="time">To   : ${EndTime.toLocaleString()} </div></div></div>';
var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    eventSettings: {
        dataSource: scheduleData,
        enableTooltip: true,
        tooltipTemplate: template
    }
});
scheduleObj.appendTo('#Schedule');

