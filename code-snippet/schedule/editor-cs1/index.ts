

import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Schedule, Day, Week, WorkWeek, Month, Agenda, PopupOpenEventArgs } from '@syncfusion/ej2-schedule';
import { eventData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    showQuickInfo: false,
    editorTemplate: '#EventEditorTemplate',
        popupOpen: (args: PopupOpenEventArgs) => {
            if (args.type === 'Editor') {
                let statusElement: HTMLInputElement = args.element.querySelector('#EventType') as HTMLInputElement;
                if (!statusElement.classList.contains('e-dropdownlist')) {
                    let dropDownListObject: DropDownList = new DropDownList({
                        placeholder: 'Choose status', value: statusElement.value,
                        dataSource: ['New', 'Requested', 'Confirmed']
                    });
                    dropDownListObject.appendTo(statusElement);
                }
                let startElement: HTMLInputElement = args.element.querySelector('#StartTime') as HTMLInputElement;
                if (!startElement.classList.contains('e-datetimepicker')) {
                    new DateTimePicker({ value: new Date(startElement.value) || new Date() }, startElement);
                }
                let endElement: HTMLInputElement = args.element.querySelector('#EndTime') as HTMLInputElement;
                if (!endElement.classList.contains('e-datetimepicker')) {
                    new DateTimePicker({ value: new Date(endElement.value) || new Date() }, endElement);
                }
            }
        },
    eventSettings: { dataSource: eventData }
});
scheduleObj.appendTo('#Schedule');


