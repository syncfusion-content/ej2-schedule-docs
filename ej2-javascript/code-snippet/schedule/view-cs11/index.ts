

import { Schedule, TimelineViews } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(TimelineViews);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: [{ option: 'TimelineWeek', timeScale: {enable: false} }],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


