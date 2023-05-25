

import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';
import { webinarData } from './datasource.ts';
import { Internationalization } from '@syncfusion/ej2-base';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
 let instance: Internationalization = new Internationalization();
(window as TemplateFunction).getTimeString = (value: Date) => {
    return instance.formatDate(value, { skeleton: 'hm' });
};
interface TemplateFunction extends Window {
    getTimeString?: Function;
}
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '500px',
    readonly: true,
    selectedDate: new Date(2018, 1, 15),
    eventSettings: {
        dataSource: webinarData,
        template: '#apptemplate'
    }
});
scheduleObj.appendTo('#Schedule');


