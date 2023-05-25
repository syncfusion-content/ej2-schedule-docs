

import { Internationalization } from "@syncfusion/ej2-base";
import { Schedule, Month } from '@syncfusion/ej2-schedule';

Schedule.Inject(Month);

let instance: Internationalization = new Internationalization();
(window as TemplateFunction).getDate = (date: Date) => {
  return instance.formatDate(date, { skeleton: "Ed" });
};
interface TemplateFunction extends Window {
    getDate?: Function;
}

let scheduleObj: Schedule = new Schedule({
        width: '100%',
        height: '550px',
        views: ['Month'],
        cssClass: 'schedule-cell-header-template',
        cellHeaderTemplate: '<div class="cell-header-wrap">${getDate(data.date)}</div>'
});
scheduleObj.appendTo('#Schedule');


