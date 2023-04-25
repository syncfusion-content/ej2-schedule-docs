

import { Schedule, Day, Week, WorkWeek } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'WorkWeek'],
    startHour: '07:00',
    endHour: '18:00',
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


