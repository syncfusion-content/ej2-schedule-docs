

import { Schedule, Day, Week, WorkWeek, Month} from '@syncfusion/ej2-schedule';
import { Button } from '@syncfusion/ej2-buttons';

Schedule.Inject(Day, Week, WorkWeek, Month);
let scheduleData: Object[] = [{
        Id: 3,
        Subject: 'Testing',
        StartTime: new Date(2018, 1, 11, 9, 0),
        EndTime: new Date(2018, 1, 11, 10, 0),
        IsAllDay: false
    },{
        Id: 4,
        Subject: 'Vacation',
        StartTime: new Date(2018, 1, 13, 9, 0),
        EndTime: new Date(2018, 1, 13, 10, 0),
        IsAllDay: false
        }];
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    eventSettings: {
        dataSource: scheduleData
    }
});
scheduleObj.appendTo('#Schedule');
let remove: Button = new Button();
remove.appendTo('#delete');
remove.element.onclick = (): void => {
scheduleObj.deleteEvent(4);
};


