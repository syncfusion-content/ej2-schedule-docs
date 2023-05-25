

import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';

let data: object [] = [{
    Id: 1,
    Subject: 'Scrum Meeting',
    StartTime: new Date(2018, 0, 28, 10, 0),
    EndTime: new Date(2018, 0, 28, 12, 30),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=8',
    RecurrenceException:'20180130T043000Z'
},
{
    Id: 2,
    Subject: 'Scrum Meeting',
    StartTime: new Date(2018, 0, 30, 9, 0),
    EndTime: new Date(2018, 0, 30, 10, 30),
    Description: "Meeting time changed based on team activities.",
    RecurrenceID: 1
}];
Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2018, 0, 28),
    eventSettings: {
        dataSource: data
    }
});
scheduleObj.appendTo('#Schedule');


