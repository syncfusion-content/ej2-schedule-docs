

import { Schedule, Week, WorkWeek, Month, TimelineViews } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Week, WorkWeek, Month, TimelineViews);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    currentView: 'WorkWeek',
    views: ['Week', 'WorkWeek', 'Month', 'TimelineWeek', 'TimelineWorkWeek'],
    workDays: [1, 3, 5],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


