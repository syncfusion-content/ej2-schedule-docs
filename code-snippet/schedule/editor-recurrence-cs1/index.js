var scheduleObj = new ej.schedule.Schedule({
    width: '100%', height: '550px',
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    selectedDate: new Date(2018, 1, 15),
    editorTemplate: '#EventEditorTemplate',
    popupOpen: function (args) {
        if (args.type === 'Editor') {
            var startElement = args.element.querySelector('#StartTime');
            if (!startElement.classList.contains('e-datetimepicker')) {
                new ej.calendars.DateTimePicker({ value: new Date(startElement.value) || new Date() }, startElement);
            }
            var endElement = args.element.querySelector('#EndTime');
            if (!endElement.classList.contains('e-datetimepicker')) {
                new ej.calendars.DateTimePicker({ value: new Date(endElement.value) || new Date() }, endElement);
            }
            var recurElement = args.element.querySelector('#RecurrenceEditor');
            if (!recurElement.classList.contains('e-recurrenceeditor')) {
                recurrObject = new ej.schedule.RecurrenceEditor({
                });
                recurrObject.appendTo(recurElement);
                scheduleObj.eventWindow.recurrenceEditor = recurrObject;
            }
        }
    },
    eventSettings: { dataSource: eventData }
});
scheduleObj.appendTo('#Schedule');

