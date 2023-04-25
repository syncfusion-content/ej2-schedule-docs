

import { Schedule, Day, Week, TimelineViews, Month, Agenda } from '@syncfusion/ej2-schedule';

let data: object [] = [{
    Subject: 'Paris',
    StartTime: new Date(2018, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 15, 12, 30)
}];

Schedule.Inject(Day, Week, TimelineViews, Month, Agenda);
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'],
    eventSettings: {
        dataSource: data
    }
});
scheduleObj.appendTo('#Schedule');


