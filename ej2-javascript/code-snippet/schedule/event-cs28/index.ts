

import { Schedule, Day, Week, WorkWeek, Month, TimelineViews } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month, TimelineViews);

let scheduleObj: Schedule = new Schedule({
    height: '550px',
    width: '100%',
    cssClass: 'custom-class',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'WorkWeek', 'Month', 'TimelineWeek'],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');