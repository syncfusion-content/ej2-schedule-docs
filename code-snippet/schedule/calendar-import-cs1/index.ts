

import { Uploader, SelectedEventArgs } from '@syncfusion/ej2-inputs';
import { Schedule, Day, Week, WorkWeek, Month, Agenda, ICalendarImport} from
'@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda, ICalendarImport);

let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '520px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');
// Initialize Uploder component for import
let uploadObj: Uploader = new Uploader({
    allowedExtensions: '.ics',
    cssClass: 'calendar-import',
    buttons: { browse: 'Choose file' },
    multiple: false,
    showFileList: false,
    selected: (args: SelectedEventArgs) => scheduleObj.importICalendar((<HTMLInputElement>args.event.target).files[0])
});
uploadObj.appendTo('#ics-import');


