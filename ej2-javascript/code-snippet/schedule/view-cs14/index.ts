

import { Schedule, TimelineYear } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(TimelineYear);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: [{ option: 'TimelineYear', displayName: 'Horizontal Timeline Year', isSelected: true }],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


