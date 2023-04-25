var data = [{
    Id: 3,
    Subject: 'Testing',
    StartTime: new Date(2018, 1, 11, 9, 0),
    EndTime: new Date(2018, 1, 11, 10, 0),
    IsAllDay: false
  },{
    Id: 4,
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

var add = new ej.buttons.Button();
add.appendTo('#btn1');
add.element.onclick = function() {
let Data = [{
    Id: 1,
    Subject: 'Conference',
    StartTime: new Date(2018, 1, 12, 9, 0),
    EndTime: new Date(2018, 1, 12, 10, 0),
    IsAllDay: false
},{
    Id: 2,
    Subject: 'Meeting',
    StartTime: new Date(2018, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 15, 11, 30),
    IsAllDay: false
    }];
scheduleObj.addEvent(Data);
};
var edit = new ej.buttons.Button();
edit.appendTo('#btn2');
edit.element.onclick = function() {
let Data = {
    Id: 3,
    Subject: 'Edited',
    StartTime: new Date(2018, 1, 11, 10, 0),
    EndTime: new Date(2018, 1, 11, 11, 0),
    IsAllDay: false
};
scheduleObj.saveEvent(Data);
};
var remove = new ej.buttons.Button();
remove.appendTo('#btn3');
remove.element.onclick = function() {
scheduleObj.deleteEvent(4);
};

