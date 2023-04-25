

import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '500px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: {
        dataSource: scheduleData,
        fields: {
            subject: { title: 'Event Name', name: 'Subject', default: 'Add Name' },
            location: { title: 'Event Location', name: 'Location', default: 'USA' },
            description: { title: 'Summary', name: 'Description' },
            startTime: { title: 'From', name: 'StartTime' },
            endTime: { title: 'To', name: 'EndTime' }
        }
    }
});
scheduleObj.appendTo('#Schedule');


