

import { Schedule,TimelineMonth } from '@syncfusion/ej2-schedule';
import { eventData } from './datasource.ts';

Schedule.Inject(TimelineMonth);
let scheduleObj: Schedule = new Schedule({
    width: '100%', height: '550px',
    selectedDate: new Date(2018, 0, 1),
    headerRows: [{ option: 'Month' }, { option: 'Date' }],
    views: [{ option: 'TimelineMonth', interval: 12 }],
    eventSettings: { dataSource: eventData }
});
scheduleObj.appendTo('#Schedule');


