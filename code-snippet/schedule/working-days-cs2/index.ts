

import { Schedule, Day, Week, TimelineMonth } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, TimelineMonth);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'TimelineMonth'],
    showWeekend: false,
    workDays: [1, 3, 4, 5],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


