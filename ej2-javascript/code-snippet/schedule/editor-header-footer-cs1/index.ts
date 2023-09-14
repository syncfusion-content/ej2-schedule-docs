
import { Schedule, Day, Week, WorkWeek, Month, Agenda, PopupOpenEventArgs } from '@syncfusion/ej2-schedule';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
const today: Date = new Date();
const data : Record<string, any>[] = [{
    Id: 1,
    Subject: 'Surgery - Andrew',
    StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0),
    EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0),
    IsAllDay: false
}, {
    Id: 2,
    Subject: 'Consulting - John',
    StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0),
    EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 30),
    IsAllDay: false
}, {
    Id: 3,
    Subject: 'Therapy - Robert',
    StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 30),
    EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 30),
    IsAllDay: false
}, {
    Id: 4,
    Subject: 'Observation - Steven',
    StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 30),
    EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 30),
    IsAllDay: false

}]
const scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    editorFooterTemplate: '#editor-footer',
    editorHeaderTemplate: '#editor-header',
    eventSettings: { dataSource: data },
    popupOpen: onPopupOpen
});
scheduleObj.appendTo('#Schedule');

function onSaveButtonClick(args: PopupOpenEventArgs) {
    const data: Record<string, any> = {
        Id: args.data.Id,
        Subject: (args.element.querySelector('#Subject') as HTMLInputElement).value,
        StartTime: (args.element.querySelector('#StartTime') as any).ej2_instances[0].value,
        EndTime: (args.element.querySelector('#EndTime') as any).ej2_instances[0].value,
        IsAllDay: args.element.querySelector('#IsAllDay' as any).checked
    };
    if (args.target.classList.contains('e-appointment')) {
        scheduleObj.saveEvent(data, 'Save');
    } else {
        data.Id = scheduleObj.getEventMaxID(),
        scheduleObj.addEvent(data);
    }
    scheduleObj.closeEditor();
}


function onPopupOpen(args: PopupOpenEventArgs): void {
    if (args.type === 'Editor') {
        const saveButton: HTMLElement = args.element.querySelector('#Save') as HTMLElement;
        const cancelButton: HTMLElement = args.element.querySelector('#Cancel') as HTMLElement;
        const checkBox: HTMLInputElement = args.element.querySelector('#check-box') as HTMLInputElement;
        checkBox.onchange = () => {
            if (!(checkBox as HTMLInputElement).checked) {
                saveButton.setAttribute('disabled', '');
            } else {
                saveButton.removeAttribute('disabled');
            }
        };
        saveButton.onclick = () => {
            onSaveButtonClick(args);
        }
        cancelButton.onclick = () => {
            scheduleObj.closeEditor();
        };
    }
}


