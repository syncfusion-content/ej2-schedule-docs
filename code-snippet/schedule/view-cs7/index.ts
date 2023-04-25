

import { Schedule, Year } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Year);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Year'],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


