

import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { Schedule, Day, Week, WorkWeek, Month, RecurrenceEditor, PopupOpenEventArgs } from '@syncfusion/ej2-schedule';
import { eventData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    editorTemplate: '#EventEditorTemplate',
    popupOpen: (args: PopupOpenEventArgs) => {
        if (args.type === 'Editor') {
            let startElement: HTMLInputElement = args.element.querySelector('#StartTime') as HTMLInputElement;
            if (!startElement.classList.contains('e-datetimepicker')) {
                new DateTimePicker({ value: new Date(startElement.value) || new Date() }, startElement);
            }
            let endElement: HTMLInputElement = args.element.querySelector('#EndTime') as HTMLInputElement;
            if (!endElement.classList.contains('e-datetimepicker')) {
                new DateTimePicker({ value: new Date(endElement.value) || new Date() }, endElement);
            }
            let recurElement: HTMLElement = args.element.querySelector('#RecurrenceEditor');
            if (!recurElement.classList.contains('e-recurrenceeditor')) {
                let recurrObject: RecurrenceEditor = new RecurrenceEditor({
                });
                recurrObject.appendTo(recurElement);
                (scheduleObj.eventWindow as any).recurrenceEditor = recurrObject;
            }
            document.getElementById('RecurrenceEditor').style.display = (scheduleObj.currentAction == "EditOccurrence") ? 'none' : 'block';
        }
    },
    eventSettings: { dataSource: eventData }
});
scheduleObj.appendTo('#Schedule');


