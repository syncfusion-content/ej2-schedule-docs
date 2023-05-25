

import { Schedule, Week, Month } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject( Week, Month );
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: [{ option: 'Week', dateFormat: 'dd-MMM-yyyy' }, { option: 'Month', showWeekend: false, readonly: true }],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


