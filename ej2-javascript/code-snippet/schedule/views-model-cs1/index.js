ej.schedule.Schedule.Inject(ej.schedule.Week, ej.schedule.WorkWeek, ej.schedule.Month);

var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: [{ option: 'Week', startHour: '07:00', endHour: '15:00'},
            { option: 'WorkWeek', startHour: '10:00', endHour: '18:00'}, 
            { option: 'Month' , showWeekend: false }],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


