var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '520px',
    views: ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'],
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');
var uploadObj = new ej.inputs.Uploader({
    allowedExtensions: '.ics',
    cssClass: 'calendar-import',
    buttons: { browse: 'Choose file' },
    multiple: false,
    showFileList: false,
    selected: function (args) {
        scheduleObj.importICalendar(args.event.target.files[0]);
    }
});
uploadObj.appendTo('#ics-import');

