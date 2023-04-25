

import { Schedule, Day, Week } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    currentView: 'Day',
    selectedDate: new Date(2018, 1, 15),
    views: [{ option: 'Day', interval: 3, displayName: '3 Days' },
            { option: 'Week', interval: 2, displayName: '2 Weeks' }],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


