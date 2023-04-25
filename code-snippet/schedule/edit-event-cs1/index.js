var data = [{
    Id: 1,
    Subject: 'Testing',
    StartTime: new Date(2018, 1, 11, 9, 0),
    EndTime: new Date(2018, 1, 11, 10, 0),
    IsAllDay: false
  },{
    Id: 2,
    Subject: 'Vacation',
    StartTime: new Date(2018, 1, 13, 9, 0),
    EndTime: new Date(2018, 1, 13, 10, 0),
    IsAllDay: false
}];

var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: data }
});
scheduleObj.appendTo('#Schedule');

var edit = new ej.buttons.Button();
edit.appendTo('#edit');
edit.element.onclick = function() {
let data = {
    Id: 1,
    Subject: 'Edited',
    StartTime: new Date(2018, 1, 11, 10, 0),
    EndTime: new Date(2018, 1, 11, 11, 0),
    IsAllDay: false
};
scheduleObj.saveEvent(data);
};

