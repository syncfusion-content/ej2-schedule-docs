var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    workHours: {
        highlight: true,
        start: '09:00',
        end: '11:00'
    },
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');
var button = new ej.buttons.Button();
button.appendTo('#btn1');
var workHours = document.querySelector('#btn1');
var hide = document.querySelector('#btn2');
workHours.innerText = 'Change the work hours';
hide.style.display ='none';
button.element.onclick = function() {
var dates = [new Date(2018, 1, 15), new Date(2018, 1, 17)];
scheduleObj.setWorkHours(dates, '11:00','20:00');
};

