var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '520px',
    views: ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'],
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');
var buttonObj = new ej.buttons.Button();
buttonObj.appendTo('#ics-export');
buttonObj.element.onclick = function () {
    scheduleObj.exportToICalendar();
};

