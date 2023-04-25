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

var add = new ej.buttons.Button();
add.appendTo('#add');
add.element.onclick = function() {
let Data = [{
    Id: 3,
    Subject: 'Conference',
    StartTime: new Date(2018, 1, 12, 9, 0),
    EndTime: new Date(2018, 1, 12, 10, 0),
    IsAllDay: false
},{
    Id: 4,
    Subject: 'Meeting',
    StartTime: new Date(2018, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 15, 11, 30),
    IsAllDay: false
    }];
scheduleObj.addEvent(Data);
};

