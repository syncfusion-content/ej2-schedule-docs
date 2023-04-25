

import { extend } from '@syncfusion/ej2-base';
import { Schedule, Day, Week, WorkWeek, Month, Agenda, DragAndDrop, DragEventArgs } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda, DragAndDrop);
let data: Object[] = <Object[]>extend([], scheduleData, null, true);
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: data },
    dragStop: (args: DragEventArgs) => {
        args.cancel = true; //cancels the drop action
        scheduleObj.openEditor(args.data, "Save"); //open the event window with updated start and end time
    }
});
scheduleObj.appendTo('#Schedule');


