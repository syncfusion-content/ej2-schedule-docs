

import { Schedule, Day, Week, TimelineViews, Month, Agenda } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, TimelineViews, Month, Agenda);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'],
    eventSettings: {
        dataSource: scheduleData,
        fields: {
            id: 'Id',
            subject: { name: 'Subject', title: 'Event Name' },
            location: { name: 'Location', title: 'Event Location'},
            description: { name: 'Description', title: 'Event Description' },
            startTime: { name: 'StartTime', title: 'Start Duration' },
            endTime: { name: 'EndTime', title: 'End Duration'  }
        }
    }
});
scheduleObj.appendTo('#Schedule');


