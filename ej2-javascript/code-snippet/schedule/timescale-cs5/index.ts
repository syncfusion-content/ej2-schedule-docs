

import { Schedule, Day, Week, WorkWeek, TimelineViews } from '@syncfusion/ej2-schedule';

Schedule.Inject(Day, Week, WorkWeek, TimelineViews);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    views: ['Day', 'Week', 'WorkWeek', 'TimelineDay'],
    showTimeIndicator: true
});
scheduleObj.appendTo('#Schedule');


