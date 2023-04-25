

import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';

let data: object[] = [{
    Id: 1,
    Subject: 'Scrum Meeting',
    StartTime: new Date(2018, 0, 28, 10, 0),
    EndTime: new Date(2018, 0, 28, 12, 30),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;UNTIL=20180129T043000Z;',
},
{
    Id: 2,
    Subject: 'Scrum Meeting - Following Edited',
    StartTime: new Date(2018, 0, 30, 10, 0),
    EndTime: new Date(2018, 0, 30, 12, 30),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;UNTIL=20180204T043000Z;',
    FollowingID: 1
}];
Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2018, 0, 28),
    eventSettings: {
        dataSource: data,
        editFollowingEvents: true
    }
});
scheduleObj.appendTo('#Schedule');


