

import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
let scheduleObj: Schedule = new Schedule({
    width:'auto', height: 'auto',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


