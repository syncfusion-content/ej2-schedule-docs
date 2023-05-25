

import { Schedule, TimelineViews, TimelineMonth } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(TimelineViews, TimelineMonth);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '500px',
    currentView: 'TimelineMonth',
    views: ['TimelineWeek', 'TimelineMonth'],
    selectedDate: new Date(2018, 1, 15),
    eventSettings: {
        dataSource: scheduleData,
        enableMaxHeight: true,
        enableIndicator: false
    }
});
scheduleObj.appendTo('#Schedule');


