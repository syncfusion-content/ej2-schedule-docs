

import { extend } from '@syncfusion/ej2-base';
import { Schedule, Day, Week, WorkWeek, Month, Agenda, DragAndDrop, DragEventArgs } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda, DragAndDrop);


let data: Object[] = <Object[]>extend([], scheduleData, null, true);
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: data },
    dragStart: (args: DragEventArgs) => {
        args.excludeSelectors = 'e-header-cells,e-header-day,e-header-date,e-all-day-cells';
    }
});
scheduleObj.appendTo('#Schedule');


