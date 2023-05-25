

import { Schedule, TimelineViews, TimelineMonth, Agenda, Resize, DragAndDrop } from '@syncfusion/ej2-schedule';
import {  scheduleData } from './datasource.ts';

Schedule.Inject(TimelineViews, TimelineMonth, Agenda, Resize, DragAndDrop);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '450px',
    rowAutoHeight: true,
    selectedDate: new Date(2018, 1, 15),
    currentView: 'TimelineWeek',
    views: [
        { option: 'TimelineDay' },
        { option: 'TimelineWeek' },
        { option: 'TimelineWorkWeek' },
        { option: 'TimelineMonth' },
        { option: 'Agenda' }
    ],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


