

import { Schedule, Month } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Month);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: [{ option: 'Month', showWeekNumber: true, readonly: true  }],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


