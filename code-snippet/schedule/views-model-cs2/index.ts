

import { Schedule, Week, WorkWeek, Month } from '@syncfusion/ej2-schedule';
import { defaultData } from './datasource.ts';

Schedule.Inject( Week, WorkWeek, Month );

let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: [{ option: 'Week', startHour: '07:00', endHour: '15:00'},
            { option: 'WorkWeek', startHour: '10:00', endHour: '18:00'},
            { option: 'Month' , showWeekend: false }],
    eventSettings: { dataSource: defaultData }
});
scheduleObj.appendTo('#Schedule');


