

import { Schedule, TimelineMonth, CellTemplateArgs, getWeekNumber } from '@syncfusion/ej2-schedule';
import { Internationalization } from '@syncfusion/ej2-base';
import { eventData } from './datasource.ts';

Schedule.Inject(TimelineMonth);

interface TemplateFunction extends Window {
    getYearDetails?: Function;
    getMonthDetails?: Function;
    getWeekDetails?: Function;
}
let instance: Internationalization = new Internationalization();
(window as TemplateFunction).getYearDetails = (value: CellTemplateArgs) => {
    return 'Year: ' + instance.formatDate((value as CellTemplateArgs).date, { skeleton: 'y' });
};
(window as TemplateFunction).getMonthDetails = (value: CellTemplateArgs) => {
    return 'Month: '+ instance.formatDate((value as CellTemplateArgs).date, { skeleton: 'M' });
};
(window as TemplateFunction).getWeekDetails = (value: CellTemplateArgs) => {
    return 'Week ' + getWeekNumber((value as CellTemplateArgs).date);
};
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 0, 1),
    headerRows: [
        { option: 'Year', template: '#year-template' },
        { option: 'Month', template: '#month-template' },
        { option: 'Week', template: '#week-template' },
        { option: 'Date' }
    ],
    views: [{ option: 'TimelineMonth' }],
    eventSettings: { dataSource: eventData }
};
scheduleObj.appendTo('#Schedule');


