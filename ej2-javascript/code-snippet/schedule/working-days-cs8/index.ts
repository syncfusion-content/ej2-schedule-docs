

import { Internationalization } from '@syncfusion/ej2-base';
import { Schedule, Day, Week, TimelineViews } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, TimelineViews);
let intl: Internationalization = new Internationalization();
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    width: '100%',
    views: ['Day', 'Week', 'TimelineWorkWeek'],
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: scheduleData },
    created: ():void => {
        scheduleObj.scrollTo(intl.formatDate(new Date(), { skeleton: 'Hm' }));
    }
});
scheduleObj.appendTo('#Schedule');


