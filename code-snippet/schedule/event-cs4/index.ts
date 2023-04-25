

import { Schedule, Day, Week, TimelineMonth, Month, Agenda } from '@syncfusion/ej2-schedule';

let data: object [] = [{
    Id: 1,
    Subject: 'Paris',
    StartTime: new Date(2018, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 15, 12, 30),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5'
}];
Schedule.Inject(Day, Week, TimelineMonth, Month, Agenda);
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'TimelineMonth', 'Month', 'Agenda'],
    eventSettings: {
        dataSource: data
    }
});
scheduleObj.appendTo('#Schedule');


