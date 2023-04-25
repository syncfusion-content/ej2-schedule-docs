

import { Schedule, Day, Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-schedule';
import { generateObject } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);

let data: Object[] = generateObject();
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2021, 3, 28),
    enableAllDayScroll: true,
    eventSettings: { dataSource: data }
});
scheduleObj.appendTo('#Schedule');


