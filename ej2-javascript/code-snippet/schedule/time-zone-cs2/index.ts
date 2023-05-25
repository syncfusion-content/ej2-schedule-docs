

import { Schedule, Day, Week, Month, Timezone } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, Month);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    views: ['Day','Week', 'Month'],
    selectedDate: new Date(2018, 1, 17),
    timezone: 'America/New_York',
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


