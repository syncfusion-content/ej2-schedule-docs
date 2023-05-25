

import { Internationalization } from '@syncfusion/ej2-base';
import { Schedule, Month, PopupOpenEventArgs } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject( Month);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Month'],
    popupOpen: (args: PopupOpenEventArgs) => {
        if (args.type === 'EventContainer') {
            let instance: Internationalization = new Internationalization();
            let date: string  = instance.formatDate(args.data.date, { skeleton: 'MMMEd' });
            ((args.element.querySelector('.e-header-date')) as HTMLElement).innerText = date;
            ((args.element.querySelector('.e-header-day')) as HTMLElement).innerText = 'Event count: ' + args.data.event.length;
        }
    },
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


