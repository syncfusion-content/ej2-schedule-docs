

import { Button } from '@syncfusion/ej2-buttons';
import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';
import { eventData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: eventData },
    dataBound: onDataBound
});
scheduleObj.appendTo('#Schedule');
let btn: Button = new Button();
btn.appendTo('#clear');
document.getElementById('clear').onclick = () => {
    document.getElementById('EventLog').innerHTML = '';
};
function onDataBound(): void {
    let event: Object[] = scheduleObj.getEvents();
    appendElement('Events present on scheduler <b>' + event.length +'<b><hr>');
}
function appendElement(html: string): void {
    let span: HTMLElement = document.createElement('span');
    span.innerHTML = html;
    let log: HTMLElement = document.getElementById('EventLog');
    log.insertBefore(span, log.firstChild);
}


