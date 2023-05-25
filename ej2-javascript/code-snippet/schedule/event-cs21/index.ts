

import { Schedule, Day, Week, TimelineViews, Month, Agenda } from '@syncfusion/ej2-schedule';

let data: object [] = [{
    Subject: 'Paris',
    StartTime: new Date(2018, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 15, 12, 30)
},{
    Subject: 'Scrum Meeting',
    StartTime: new Date(2018, 1, 11, 9, 30),
    EndTime: new Date(2018, 1, 11, 11, 0)
},{
    Subject: 'Meeting',
    StartTime: new Date(2018, 1, 13, 10, 0),
    EndTime: new Date(2018, 1, 13, 10, 30)
},{
    Subject: 'Inline Editer Window',
    StartTime: new Date(2018, 1, 13, 11, 0),
    EndTime: new Date(2018, 1, 13, 12, 0)
},{
    Subject: 'Validated',
    StartTime: new Date(2018, 1, 17, 11, 0),
    EndTime: new Date(2018, 1, 17, 12, 30)
}];

Schedule.Inject(Day, Week, TimelineViews, Month, Agenda);
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 11),
    views: ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'],
    allowInline:true,
    eventSettings: {
        dataSource: data
    }
});
scheduleObj.appendTo('#Schedule');


