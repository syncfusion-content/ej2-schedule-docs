

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

    let button: Button = new Button();
    button.appendTo('#btn1');
    button.element.onclick = (): void => {
    let Data: Object[] = [{
        Id: 1,
        Subject: 'Conference',
        StartTime: new Date(2018, 1, 12, 9, 0),
        EndTime: new Date(2018, 1, 12, 10, 0),
        IsAllDay: false
    },{
        Id: 2,
        Subject: 'Meeting',
        StartTime: new Date(2018, 1, 15, 10, 0),
        EndTime: new Date(2018, 1, 15, 11, 30),
        IsAllDay: false
        }];
    scheduleObj.addEvent(Data);
    };
    let button2: Button = new Button();
    button2.appendTo('#btn2');
    button2.element.onclick = (): void => {
    let Data: Object = {
        Id: 3,
        Subject: 'Testing-edited',
        StartTime: new Date(2018, 1, 11, 10, 0),
        EndTime: new Date(2018, 1, 11, 11, 0),
        IsAllDay: false
    };
    scheduleObj.saveEvent(Data);
    };
    let button3: Button = new Button();
    button3.appendTo('#btn3');
    button3.element.onclick = (): void => {
    scheduleObj.deleteEvent(4);
    };


