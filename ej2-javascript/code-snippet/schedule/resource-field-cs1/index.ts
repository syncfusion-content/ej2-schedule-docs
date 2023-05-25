

import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { MultiSelect } from '@syncfusion/ej2-dropdowns';
import { Schedule, Day, Week, WorkWeek, Month, PopupOpenEventArgs } from '@syncfusion/ej2-schedule';
import { eventData, ownerData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
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
            let processElement: HTMLInputElement= args.element.querySelector('#OwnerId');
            if (!processElement.classList.contains('e-multiselect')) {
                let multiSelectObject: MultiSelect = new MultiSelect({
                    placeholder: 'Choose a owner',
                    fields: { text: 'text', value: 'id'},
                    dataSource: ownerData,
                    value: <string[]>((args.data.OwnerId instanceof Array) ? args.data.OwnerId : [args.data.OwnerId])
                });
                multiSelectObject.appendTo(processElement);
            }
        }
    },
    eventSettings: { dataSource: eventData }
});
scheduleObj.appendTo('#Schedule');


