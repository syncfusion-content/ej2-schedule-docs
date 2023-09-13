const today = new Date();
const data = [{Id: 1,
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
let startDateTime;
let endDateTime;
let allDay;
let subject;
let isEmptyDelete = false;
var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    editorHeaderTemplate:'#editor-header',
    editorFooterTemplate:'#editor-footer',
    eventSettings: { dataSource: data},
    popupOpen: onPopupOpen
});
scheduleObj.appendTo('#Schedule');
function onSaveButtonClick() {
    const saveAppointments = crudAppointments();
    if (saveAppointments !== undefined) {
        scheduleObj.saveEvent(saveAppointments, 'Save');
    }
    scheduleObj.closeEditor();
}

function onCancelButtonClick() {
    scheduleObj.closeEditor();
}

function onDeleteButtonClick() {
    isEmptyDelete = true;
    const deleteAppointments = crudAppointments();
    if (deleteAppointments !== undefined) {
        scheduleObj.deleteEvent(deleteAppointments, 'Delete');
    }
    scheduleObj.closeEditor();
}

function onPopupOpen(args) {
    if (args.type === 'Editor') {
        document.getElementById('Save').addEventListener('click', onSaveButtonClick);
        document.getElementById('Cancel').addEventListener('click', onCancelButtonClick);
        document.getElementById('Delete').addEventListener('click', onDeleteButtonClick);
        subject = args.element.querySelector('#Subject');
        startDateTime = args.element.querySelector('#StartTime').ej2_instances[0];
        endDateTime = args.element.querySelector('#EndTime').ej2_instances[0];
        allDay = args.element.querySelector('#IsAllDay');
    }
}
function crudAppointments() {
    let appointments = [];
    const activeData = scheduleObj.activeEventData.event ;
    if (scheduleObj.activeEventData.event === undefined) {
        if (isEmptyDelete) {
            isEmptyDelete = false;
            return appointments;
        }
        const data =
        {
            Subject: subject.value,
            StartTime: startDateTime.value,
            EndTime: endDateTime.value,
            AllDay: allDay.checked
        };
        scheduleObj.addEvent(data);
        return appointments ;
    }
    for (let i = 0; i < scheduleObj.eventsData.length; i++) {
        if (scheduleObj.eventsData[i].Id === activeData.Id) {
            scheduleObj.eventsData[i].Subject = subject.value;
            scheduleObj.eventsData[i].Subject = location.value;
            scheduleObj.eventsData[i].StartTime = startDateTime.value;
            scheduleObj.eventsData[i].EndTime = endDateTime.value;
            scheduleObj.eventsData[i].IsAllDay = allDay.checked;
            return scheduleObj.eventsData[i];
        }
    }
    return appointments;
}

