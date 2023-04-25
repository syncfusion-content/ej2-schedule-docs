var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');
var cellButton = new ej.buttons.Button();
cellButton.appendTo('#btn1');
var eventButton = new ej.buttons.Button();
eventButton.appendTo('#btn2');
cellButton.element.onclick = function() {
var cellData ={
    startTime: new Date(2018, 1, 15, 10, 0),
    endTime: new Date(2018, 1, 15, 11, 0),
    };
    scheduleObj.openEditor(cellData,'Add');
};
eventButton.element.onclick = function() {
var eventData ={
    Id: 4,
    Subject: 'Meteor Showers in 2018',
    StartTime: new Date(2018, 1, 14, 13, 0),
    EndTime: new Date(2018, 1, 14, 14, 30)
};
scheduleObj.openEditor(eventData,'Save');
};

