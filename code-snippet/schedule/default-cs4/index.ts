

import { Schedule, Day, Week, Agenda, TimelineViews, TimelineMonth } from '@syncfusion/ej2-schedule';

Schedule.Inject(Day, Week, Agenda, TimelineViews, TimelineMonth);
(window as TemplateFunction).getDateRange = (value: Date) => value.toLocaleString('en-us', { month: 'long' }) +' '+ value.getFullYear();

interface TemplateFunction extends Window {
    getDateRange?: Function;
}
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    dateRangeTemplate:'<div class="date-text">${getDateRange(data.startDate)}-${getDateRange(data.endDate)}</div>'
});
scheduleObj.appendTo('#Schedule');


