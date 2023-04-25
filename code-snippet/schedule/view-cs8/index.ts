

import { Internationalization } from '@syncfusion/ej2-base';
import { Schedule, Agenda } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Agenda);
let instance: Internationalization = new Internationalization();
(window as TemplateFunction).getTimeString = (value: Date) => {
    return instance.formatDate(value, { skeleton: 'hm' });
};
interface TemplateFunction extends Window {
    getTimeString?: Function;
}
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '350px',
    selectedDate: new Date(2018, 1, 15),
    views: [{
        option: 'Agenda',
        eventTemplate: '<div class="template-wrap"><div class="subject">${Subject}</div><div class="time">${getTimeString(data.StartTime)} - ${getTimeString(data.EndTime)}</div></div>',
        allowVirtualScrolling: true
    }],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


