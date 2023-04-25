

import { Schedule, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-schedule';
import { L10n, loadCldr } from '@syncfusion/ej2-base';
import { scheduleData } from './datasource.ts';
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';
import * as localeTexts from './locale.json';

Schedule.Inject(Day, Week, WorkWeek, Month);
loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);
L10n.load(localeTexts);

let scheduleObj: Schedule = new Schedule({
  height: '550px',
  locale: 'fr-CH',
  selectedDate: new Date(2018, 1, 15),
  views: ['Day', 'Week', 'WorkWeek', 'Month'],
  eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


