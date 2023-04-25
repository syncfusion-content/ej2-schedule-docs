

import { Schedule, Day, Week, Month, timezoneData } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

let customTimezoneData: { [key: string]: Object }[] = [
  { Value: 'America/New_York', Text: '(UTC-05:00) Eastern Time' },
  { Value: 'UTC', Text: 'UTC' },
  { Value: 'Asia/Kolkata', Text: '(UTC+05:30) India Standard Time' }
];

timezoneData.splice(0, timezoneData.length, ...customTimezoneData);

Schedule.Inject(Day, Week, Month);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 11),
    views: ['Day','Week', 'Month'],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


