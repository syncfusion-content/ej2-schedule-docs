var scheduleObj = new ej.schedule.Schedule({
    width: '100%', height: '550px',
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    group: { resources: ['Owners'] },
    showQuickInfo: false,
    resources: [{
        field: 'OwnerId', title: 'Owners',
        name: 'Owners', allowMultiple: true,
        dataSource: [
            { text: "Nancy", id: 1, color: "#1aaa55" },
            { text: "Smith", id: 2, color: "#7fa900" },
            { text: "Paul", id: 3, color: "#357cd2" }
        ],
        textField: 'text', idField: 'id', colorField: 'color'
    }],
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
            var processElement = args.element.querySelector('#OwnerId');
            if (!processElement.classList.contains('e-multiselect')) {
                var multiSelectObject = new ej.dropdowns.MultiSelect({
                    placeholder: 'Select a owner',
                    dataSource: ownerData,
                    fields: { text: 'text', value: 'id' },
                    value: (args.data.OwnerId instanceof Array) ? args.data.OwnerId : [args.data.OwnerId]
                });
                multiSelectObject.appendTo(processElement);
            }
        }
    },
    eventSettings: { dataSource: eventData }
});
scheduleObj.appendTo('#Schedule');

