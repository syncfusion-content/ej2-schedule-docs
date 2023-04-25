

import { Button } from '@syncfusion/ej2-buttons';
import { Schedule, Day, Week, WorkWeek, Month, Agenda, ICalendarExport} from
'@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda, ICalendarExport);

let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '520px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');
let buttonObj: Button = new Button();
buttonObj.appendTo('#ics-export');
buttonObj.element.onclick = () => scheduleObj.exportToICalendar('ScheduleEvents');


