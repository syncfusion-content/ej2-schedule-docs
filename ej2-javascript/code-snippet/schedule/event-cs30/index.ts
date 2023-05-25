

import { Schedule, Day, Week, TimelineViews, Month, Agenda, Resize, DragAndDrop } from '@syncfusion/ej2-schedule';
import { blockData } from './datasource.ts';

Schedule.Inject(Day, Week, TimelineViews, Month, Agenda, Resize, DragAndDrop);
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'],
    eventSettings: {
        dataSource: blockData
    }
});
scheduleObj.appendTo('#Schedule');


