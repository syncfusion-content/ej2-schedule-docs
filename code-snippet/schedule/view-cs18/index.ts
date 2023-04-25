

import { Schedule, Day, Week } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: [{ option: 'week', interval: 2, displayName: '2 Weeks' isSelected: true},
            { option: 'Week', interval: 3, displayName: '3 Weeks' },
            { option: 'Month', interval: 2, displayName: '2 Months' }],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


