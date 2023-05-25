

import { Schedule, Day, Week, WorkWeek, Month} from '@syncfusion/ej2-schedule';
import { Button } from '@syncfusion/ej2-buttons';

Schedule.Inject(Day, Week, WorkWeek, Month);
let scheduleData: Object[] = [{
        Id: 1,
        Subject: 'Testing',
        StartTime: new Date(2018, 1, 11, 9, 0),
        EndTime: new Date(2018, 1, 11, 10, 0),
        IsAllDay: false
    },{
        Id: 2,
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

let add: Button = new Button();
add.appendTo('#add');
add.element.onclick = (): void => {
let Data: Object[] = [{
    Id: 3,
    Subject: 'Conference',
    StartTime: new Date(2018, 1, 12, 9, 0),
    EndTime: new Date(2018, 1, 12, 10, 0),
    IsAllDay: true
},{
    Id: 4,
    Subject: 'Meeting',
    StartTime: new Date(2018, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 15, 11, 30),
    IsAllDay: false
    }];
scheduleObj.addEvent(Data);
};


