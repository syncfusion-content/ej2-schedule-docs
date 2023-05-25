

import { extend } from '@syncfusion/ej2-base';
import { Schedule, Day, Week, WorkWeek, Month, Agenda, Resize, ResizeEventArgs } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda, Resize);

let data: Object[] = <Object[]>extend([], scheduleData, null, true);
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: data },
    resizeStart: (args: ResizeEventArgs) => {
        args.scroll = { enable: false };
    }
});
scheduleObj.appendTo('#Schedule');


