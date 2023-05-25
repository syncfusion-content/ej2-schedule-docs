

import { Schedule, TimelineViews, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(TimelineViews, Week, WorkWeek, Month, Agenda);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '500px',
    views: ['TimelineDay', 'Week', 'WorkWeek', 'Month', 'Agenda'],
    selectedDate: new Date(2018, 1, 15),
    eventSettings: {
        dataSource: scheduleData,
        enableTooltip: true
    }
});
scheduleObj.appendTo('#Schedule');


