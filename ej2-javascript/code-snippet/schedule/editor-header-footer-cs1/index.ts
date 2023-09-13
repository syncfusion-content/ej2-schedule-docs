
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
let startDateTime: HTMLInputElement;
let endDateTime: HTMLInputElement;
let allDay: HTMLInputElement;
let subject: HTMLInputElement;
const scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    editorFooterTemplate: '#editor-footer',
    editorHeaderTemplate: '#editor-header',
    eventSettings: { dataSource: data, 
    fields: {id: 'Id',  subject: { name: 'Subject'}, startTime: { name: 'StartTime' }, endTime: { name: 'EndTime' }, isAllDay: { name: 'IsAllDay' }} },
    popupOpen: onPopupOpen,
});
scheduleObj.appendTo('#Schedule');
function onSaveButtonClick() {
    const saveAppointments: Record<string, any> = crudAppointments();
    if (saveAppointments !== undefined) {
        scheduleObj.saveEvent(saveAppointments, 'Save');
    }
    scheduleObj.closeEditor();
}

function onCancelButtonClick() {
    scheduleObj.closeEditor();
}

function onPopupOpen(args: PopupOpenEventArgs): void {
    if (args.type === 'Editor') {
        const saveButton: HTMLElement = document.getElementById('Save') as HTMLInputElement
        const checkBox: HTMLInputElement = document.getElementById('check-box') as HTMLInputElement;
        checkBox.onchange = function() {
            if (!(checkBox as HTMLInputElement).checked) {
                saveButton.setAttribute('disabled', '');
            } else {
                saveButton.removeAttribute('disabled');
            }
          };
        saveButton.addEventListener('click', onSaveButtonClick);
        (document.getElementById('Cancel') as HTMLElement).addEventListener('click', onCancelButtonClick);
        subject = args.element.querySelector('#Subject') as HTMLInputElement;
        startDateTime = (args.element.querySelector('#StartTime') as any).ej2_instances[0];
        endDateTime = (args.element.querySelector('#EndTime') as any).ej2_instances[0];
        allDay = args.element.querySelector('#IsAllDay') as HTMLInputElement;
    }
}
function crudAppointments(): Record<string, any> {
    let appointments: Record<string, any> = [];
    const activeData: Record<string, any> = scheduleObj.activeEventData.event as Record<string, any>;
    if (scheduleObj.activeEventData.event === undefined) {
        const data: Record<string, any> =
        {
            id: scheduleObj.getEventMaxID(),
            Subject: subject.value,
            StartTime: startDateTime.value,
            EndTime: endDateTime.value,
            AllDay: allDay.checked
        };
        scheduleObj.addEvent(data);
        return appointments ;
    }
    for (let i: number = 0; i < scheduleObj.eventsData.length; i++) {
        if (scheduleObj.eventsData[i].Id === activeData.Id) {
            scheduleObj.eventsData[i].Subject = subject.value;
            scheduleObj.eventsData[i].StartTime = startDateTime.value;
            scheduleObj.eventsData[i].EndTime = endDateTime.value;
            scheduleObj.eventsData[i].IsAllDay = allDay.checked;
            return scheduleObj.eventsData[i];
        }
    }
    return appointments;
}


