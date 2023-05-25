

import { Schedule, Day, Week, WorkWeek, Month, Agenda, Year } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda, Year);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    views: ['Day','Week', 'Month', 'Agenda', 'Year'],
    selectedDate: new Date(2018, 1, 17),
    minDate:new Date(2017, 4, 17),
    maxDate:new Date(2018, 5, 17)
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


