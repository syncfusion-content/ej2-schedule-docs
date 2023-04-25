

import { Schedule, Day, Week, WorkWeek } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';
import { Internationalization } from '@syncfusion/ej2-base';

Schedule.Inject(Day, Week, WorkWeek);
let instance: Internationalization = new Internationalization();
(window as TemplateFunction).majorSlotTemplate = (date: Date) => {
    return instance.formatDate(date, { skeleton: 'hm' });
};
(window as TemplateFunction).minorSlotTemplate = (date: Date) => {
    return instance.formatDate(date, { skeleton: 'ms' }).replace(':00', '');
};
interface TemplateFunction extends Window {
    majorSlotTemplate?: Function;
    minorSlotTemplate?: Function;
}
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'WorkWeek'],
    timeScale: {
        enable: true,
        interval: 60,
        slotCount: 6,
        majorSlotTemplate: '#majorSlotTemplate',
        minorSlotTemplate: '#minorSlotTemplate'
    },
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


