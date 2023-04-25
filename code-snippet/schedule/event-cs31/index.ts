

import { Schedule, Day, Week, TimelineViews, Month, Agenda, Resize, DragAndDrop } from '@syncfusion/ej2-schedule';

Schedule.Inject(Day, Week, TimelineViews, Month, Agenda, Resize, DragAndDrop);

let data: object [] = [{
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    StartTime: new Date(2018, 1, 15, 9, 30),
    EndTime: new Date(2018, 1, 15, 11, 0),
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5',
    IsBlock: true
}, {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    StartTime: new Date(2018, 1, 14, 12, 0),
    EndTime: new Date(2018, 1, 14, 14, 0)
}];
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'],
    eventSettings: {
        dataSource: data
    }
});
scheduleObj.appendTo('#Schedule');


