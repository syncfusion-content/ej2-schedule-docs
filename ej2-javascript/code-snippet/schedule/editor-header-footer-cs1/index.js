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
var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    editorFooterTemplate: '#editor-footer',
    editorHeaderTemplate: '#editor-header',
    eventSettings: { dataSource: data },
    popupOpen: onPopupOpen
});
scheduleObj.appendTo('#Schedule');

function onSaveButtonClick(args) {
    var data = {
        Id: args.data.Id,
        Subject: args.element.querySelector('#Subject').value,
        StartTime: args.element.querySelector('#StartTime').ej2_instances[0].value,
        EndTime: args.element.querySelector('#EndTime').ej2_instances[0].value,
        IsAllDay: args.element.querySelector('#IsAllDay').checked
    };
    if (args.target.classList.contains('e-appointment')) {
        scheduleObj.saveEvent(data, 'Save');
    }
    else {
        data.Id = scheduleObj.getEventMaxID(),
        scheduleObj.addEvent(data);
    }
    scheduleObj.closeEditor();
}


function onPopupOpen(args) {
    if (args.type === 'Editor') {
        var saveButton = args.element.querySelector('#Save');
        var cancelButton = args.element.querySelector('#Cancel');
        var checkBox = args.element.querySelector('#check-box');
        checkBox.onchange = function () {
            if (!checkBox.checked) {
                saveButton.setAttribute('disabled', '');
            }
            else {
                saveButton.removeAttribute('disabled');
            }
        };
        saveButton.onclick = function () {
            onSaveButtonClick(args);
        };
        cancelButton.onclick = function () {
            scheduleObj.closeEditor();
        };
    }
}

