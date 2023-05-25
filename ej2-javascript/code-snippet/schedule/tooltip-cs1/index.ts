

import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';
import { eventsData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
let template: string = '<div class="tooltip-wrap">' +
        '<div class="content-area"><div class="name">${Subject}</></div>' +
        '${if(City !== null && City !== undefined)}<div class="city">${City}</div>${/if}' +
        '<div class="time">From : ${StartTime.toLocaleString()} </div>' +
        '<div class="time">To   : ${EndTime.toLocaleString()} </div></div></div>';
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: {
        dataSource: eventsData,
        enableTooltip: true,
        tooltipTemplate: template
    }
});
scheduleObj.appendTo('#Schedule');


