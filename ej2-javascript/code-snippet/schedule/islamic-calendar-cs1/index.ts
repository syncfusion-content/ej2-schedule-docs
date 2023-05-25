

import {
    Schedule, Day, Week, WorkWeek, Month, Agenda, TimelineViews, TimelineMonth,
    Resize, DragAndDrop, MonthAgenda, CalendarType
} from '@syncfusion/ej2-schedule';
import { Ajax, loadCldr, setCulture, L10n } from '@syncfusion/ej2-base';
import { Calendar, Islamic } from '@syncfusion/ej2-calendars';
import { scheduleData } from './datasource.ts';
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as detimeZoneNames from './timeZoneNames.json';
import * as islamic from './ca-islamic.json';

Schedule.Inject(Day, Week, WorkWeek, Month, TimelineViews, TimelineMonth, Agenda, MonthAgenda, Resize, DragAndDrop);
Calendar.Inject(Islamic);
loadCldr(numberingSystems, gregorian, numbers, detimeZoneNames, islamic);
let localeTexts: string;
let ajax: Ajax = new Ajax('./locale.json', 'GET', false);
ajax.onSuccess = (value: string) => {
    localeTexts = value;
};
ajax.send();
L10n.load(JSON.parse(<string>localeTexts));
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    enableRtl: true,
    calendarMode: 'Islamic',
    views: [
        { option: 'Day' },
        { option: 'TimelineDay' },
        { option: 'Week' },
        { option: 'TimelineWeek' },
        { option: 'Month' },
        { option: 'TimelineMonth' },
        { option: 'Agenda' },
        { option: 'MonthAgenda' }
    ],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');
setCulture('ar');


