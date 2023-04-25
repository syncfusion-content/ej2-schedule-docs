

import { Schedule, Day, Week, Month, Timezone } from '@syncfusion/ej2-schedule';
import { fifaEventsData } from './datasource.ts';
import { extend } from '@syncfusion/ej2-base';

Schedule.Inject(Day, Week, Month);
let fifaEvents: Object[] = <Object[]>extend([], fifaEventsData, null, true);
let timezone: Timezone = new Timezone();
for (let fifaEvent of fifaEvents) {
    let event: { [key: string]: Object } = fifaEvent as { [key: string]: Object };
    event.StartTime = timezone.removeLocalOffset(<Date>event.StartTime);
    event.EndTime = timezone.removeLocalOffset(<Date>event.EndTime);
}
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 5, 17),
    views: ['Day','Week', 'Month'],
    timezone: 'UTC',
    eventSettings: { dataSource: fifaEvents }
});
scheduleObj.appendTo('#Schedule');


