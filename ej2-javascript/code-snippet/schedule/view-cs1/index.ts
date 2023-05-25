

import { Schedule, Week, Month, TimelineViews, TimelineMonth } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject( Week, Month, TimelineViews, TimelineMonth );
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Week', 'TimelineWeek', 'Month', 'TimelineMonth'],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


