

import { Schedule, Day, Week, WorkWeek } from '@syncfusion/ej2-schedule';
import { readOnlyData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek);

let scheduleObj: Schedule = new Schedule({
    height: '550px',
    width: '100%',
    views: ['Day', 'Week', 'WorkWeek'],
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: readOnlyData }
});
scheduleObj.appendTo('#Schedule');


