

import { Schedule, Day, Week, Month } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, Month);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    currentView: 'Month',
    views: ['Day', 'Week', 'Month'],
    showWeekNumber: true,
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


