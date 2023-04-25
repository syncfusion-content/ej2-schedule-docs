

import { Schedule, Month, PopupCloseEventArgs } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject( Month);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Month'],
    popupClose: (args: PopupCloseEventArgs) => {
        console.log(arg);
    },
    eventSettings: { dataSource: scheduleData }
 });
scheduleObj.appendTo('#Schedule');


