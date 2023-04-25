

import { extend } from '@syncfusion/ej2-base';
import { Schedule, Day, Week, TimelineViews, TimelineMonth, Month, Agenda, DragAndDrop} from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, TimelineViews, TimelineMonth, Month, Agenda, DragAndDrop);

let data: Object[] = <Object[]>extend([], scheduleData, null, true);
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['TimelineDay', 'Day', 'Week', 'TimelineMonth', 'Month', 'Agenda'],
    eventSettings: { dataSource: data }
});
scheduleObj.appendTo('#Schedule');


