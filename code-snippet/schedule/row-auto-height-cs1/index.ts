

import { Schedule, Month } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Month);

let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '450px',
    selectedDate: new Date(2018, 1, 15),
    currentView: 'Month',
    rowAutoHeight: true,
    views: ['Month'],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


