

import { Schedule, Day, Week, WorkWeek } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'WorkWeek'],
    showHeaderBar: false,
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


