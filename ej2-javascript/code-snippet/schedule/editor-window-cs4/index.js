var scheduleObj = new ej.schedule.Schedule({
    width: '100%', height: '550px',
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    selectedDate: new Date(2018, 1, 15),
    popupOpen: function (args) {
        if (args.type === 'Editor') {
            if (!args.element.querySelector('.custom-field-row')) {
                var row = new ej.base.createElement('div', { className: 'custom-field-row' });
                var formElement = args.element.querySelector('.e-schedule-form');
                formElement.firstChild.insertBefore(row, args.element.querySelector('.e-title-location-row'));
                var container = new ej.base.createElement('div', { className: 'custom-field-container' });
                var inputEle = new ej.base.createElement('input', {
                    className: 'e-field', attrs: { name: 'EventType' }
                });
                container.appendChild(inputEle);
                row.appendChild(container);
                var drowDownList = new ej.dropdowns.DropDownList({
                    dataSource: [
                        { text: 'Public Event', value: 'public-event' },
                        { text: 'Maintenance', value: 'maintenance' },
                        { text: 'Commercial Event', value: 'commercial-event' },
                        { text: 'Family Event', value: 'family-event' }
                    ],
                    fields: { text: 'text', value: 'value' },
                    value: args.EventType,
                    floatLabelType: 'Always', placeholder: 'Event Type'
                });
                drowDownList.appendTo(inputEle);
                inputEle.setAttribute('name', 'EventType');
            }
        }
    },
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

