

import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { Schedule, Day, Week, WorkWeek, Month, Agenda, PopupOpenEventArgs, PopupCloseEventArgs } from '@syncfusion/ej2-schedule';
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
            let subjectElement: HTMLInputElement = args.element.querySelector('#Subject') as HTMLInputElement;
            if (subjectElement) {
                subjectElement.value = ((<{ [key: string]: Object }>(args.data)).Subject as string) || "";
            }
            let statusElement: HTMLInputElement = args.element.querySelector('#EventType') as HTMLInputElement;
            if (!statusElement.classList.contains('e-dropdownlist')) {
                let dropDownListObject: DropDownList = new DropDownList({
                    placeholder: 'Choose status', value: ((<{ [key: string]: Object }>(args.data)).EventType as string),
                    dataSource: ['New', 'Requested', 'Confirmed']
                });
                dropDownListObject.appendTo(statusElement);
            }
            let startElement: HTMLInputElement = args.element.querySelector('#StartTime') as HTMLInputElement;
            if (!startElement.classList.contains('e-datetimepicker')) {
                startElement.value = (<{ [key: string]: Object }>(args.data)).StartTime as string;
                new DateTimePicker({ value: new Date(startElement.value) || new Date() }, startElement);
            }
            let endElement: HTMLInputElement = args.element.querySelector('#EndTime') as HTMLInputElement;
            if (!endElement.classList.contains('e-datetimepicker')) {
                endElement.value = (<{ [key: string]: Object }>(args.data)).EndTime as string;
                new DateTimePicker({ value: new Date(endElement.value) || new Date() }, endElement);
            }
            let descriptionElement: HTMLInputElement = args.element.querySelector('#Description') as HTMLInputElement;
            if (descriptionElement) {
                descriptionElement.value = (<{ [key: string]: Object }>(args.data)).Description as string || "";
            }
        }
    },
    popupClose: (args: PopupCloseEventArgs) => {
        if (args.type === 'Editor' && !isNullOrUndefined(args.data)) {
            let subjectElement: HTMLInputElement = args.element.querySelector('#Subject') as HTMLInputElement;
            if (subjectElement ) {
                (<{ [key: string]: Object }>(args.data)).Subject = subjectElement.value;
            }
            let statusElement: HTMLInputElement = args.element.querySelector('#EventType') as HTMLInputElement;
            if (statusElement) {
                ((<{ [key: string]: Object }>(args.data)).EventType as string) = statusElement.value;
            }
            let startElement: HTMLInputElement = args.element.querySelector('#StartTime') as HTMLInputElement;
            if (startElement) {
                (<{ [key: string]: Object }>(args.data)).StartTime = startElement.value;
            }
            let endElement: HTMLInputElement = args.element.querySelector('#EndTime') as HTMLInputElement;
            if (endElement) {
                (<{ [key: string]: Object }>(args.data)).EndTime = endElement.value;
            }
            let descriptionElement: HTMLInputElement = args.element.querySelector('#Description') as HTMLInputElement;
            if (descriptionElement) {
                ((<{ [key: string]: Object }>(args.data)).Description as string) = descriptionElement.value;
            }
        }
    },
    eventSettings: { dataSource: eventData }
});
scheduleObj.appendTo('#Schedule');


