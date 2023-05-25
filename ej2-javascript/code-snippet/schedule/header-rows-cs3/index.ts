

import { Schedule, TimelineViews,TimelineMonth } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(TimelineViews, TimelineMonth);
let scheduleObj: Schedule = new Schedule({
    width: '100%', height: '550px',
    selectedDate: new Date(2018, 1, 15),
    headerRows: [{ option: 'Week' }, { option: 'Date' }, { option: 'Hour' }],
    currentView: 'TimelineMonth',
    views: [{ option: 'TimelineMonth', interval: 24 }, { option: 'TimelineWeek', interval: 3 }, { option: 'TimelineDay', interval: 4 }],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


