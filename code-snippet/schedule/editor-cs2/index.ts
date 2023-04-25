

import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { FormValidator } from '@syncfusion/ej2-inputs';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { Schedule, Day, Week, WorkWeek, Month, PopupOpenEventArgs, EJ2Instance } from '@syncfusion/ej2-schedule';
import { eventData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    showQuickInfo: false,
    editorTemplate: '#EventEditorTemplate',
    popupOpen: (args: PopupOpenEventArgs) => {
        if (args.type === 'Editor') {
            if (!isNullOrUndefined(document.getElementById("EventType_Error"))) {
                document.getElementById("EventType_Error").style.display = "none";
                document.getElementById("EventType_Error").style.left = "351px";
            }
            let formElement: HTMLElement = <HTMLElement>args.element.querySelector('.e-schedule-form');
            let statusElement: HTMLInputElement = args.element.querySelector('#EventType') as HTMLInputElement;
            if (!statusElement.classList.contains('e-dropdownlist')) {
                let dropDownListObject: DropDownList = new DropDownList({
                    placeholder: 'Choose status', value: statusElement.value,
                    dataSource: ['New', 'Requested', 'Confirmed'],
                    select: function(args) {
                        if (!isNullOrUndefined(document.getElementById("EventType_Error"))) {
                            document.getElementById("EventType_Error").style.display = "none";
                        }
                    }
                });
                dropDownListObject.appendTo(statusElement);
            }
            let validator: FormValidator = ((formElement as EJ2Instance).ej2_instances[0] as FormValidator);
            validator.addRules('EventType', { required: true });
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


