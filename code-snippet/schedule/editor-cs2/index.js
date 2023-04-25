var scheduleObj = new ej.schedule.Schedule({
    width: '100%', height: '550px',
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    showQuickInfo: false,
    selectedDate: new Date(2018, 1, 15),
    editorTemplate: '#EventEditorTemplate',
    popupOpen: function (args) {
        if (args.type === 'Editor') {
            if (!ej.base.isNullOrUndefined(document.getElementById("EventType_Error"))) {
                document.getElementById("EventType_Error").style.display = "none";
                document.getElementById("EventType_Error").style.left = "351px";
            }
            var formElement = args.element.querySelector('.e-schedule-form');
            var statusElement = args.element.querySelector('#EventType');
            if (!statusElement.classList.contains('e-dropdownlist')) {
                var dropDownListObject = new ej.dropdowns.DropDownList({
                    placeholder: 'Select a status', value: statusElement.value,
                    dataSource: ['New', 'Requested', 'Confirmed'],
                    select: valueChange
                });
                dropDownListObject.appendTo(statusElement);
            }
            function valueChange() {
                if (!ej.base.isNullOrUndefined(document.getElementById("EventType_Error"))) {
                    document.getElementById("EventType_Error").style.display = "none";
                }
            }
            var validator = ((formElement).ej2_instances[0]);
            validator.addRules('EventType', { required: true });
            var startElement = args.element.querySelector('#StartTime');
            if (!startElement.classList.contains('e-datetimepicker')) {
                new ej.calendars.DateTimePicker({ value: new Date(startElement.value) || new Date() }, startElement);
            }
            var endElement = args.element.querySelector('#EndTime');
            if (!endElement.classList.contains('e-datetimepicker')) {
                new ej.calendars.DateTimePicker({ value: new Date(endElement.value) || new Date() }, endElement);
            }
        }
    },
    eventSettings: { dataSource: EventData }
});
scheduleObj.appendTo('#Schedule');

