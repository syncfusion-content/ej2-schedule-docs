

import { Schedule, Day, Week, WorkWeek } from '@syncfusion/ej2-schedule';
import { TimePicker, ChangeEventArgs } from '@syncfusion/ej2-calendars';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek);
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    width: '100%',
    views: ['Day', 'Week', 'WorkWeek'],
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

let scrollToHour: TimePicker = new TimePicker({
    width: 100,
    value: new Date(2000, 0, 1, 9),
    format: 'HH:mm',
    change: (args: ChangeEventArgs) => {
        scheduleObj.scrollTo(args.text);
    }
});
scrollToHour.appendTo('#ScrollToHour');


