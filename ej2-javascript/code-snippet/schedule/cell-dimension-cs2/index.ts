

import { Schedule, Day, Week, WorkWeek, Month, ActionEventArgs } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month);
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    width: '100%',
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    cssClass: 'schedule-cell-dimension',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


