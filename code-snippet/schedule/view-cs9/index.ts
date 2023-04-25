

import { Schedule, MonthAgenda } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(MonthAgenda);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 14),
    views: [{ option: 'MonthAgenda', showWeekend: false, workDays: [1,2,3] }],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


