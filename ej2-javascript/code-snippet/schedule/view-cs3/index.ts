

import { Schedule, Day } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    currentView: 'Day',
    selectedDate: new Date(2018, 1, 15),
    views: [{ option: 'Day', startHour: '09:30', endHour: '18:00', timeScale: {enable: true, slotCount: 5}}],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


