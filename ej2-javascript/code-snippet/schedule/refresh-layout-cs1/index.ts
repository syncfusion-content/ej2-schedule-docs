

import { Schedule, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-schedule';
import { Button } from '@syncfusion/ej2-buttons';

Schedule.Inject(Day, Week, WorkWeek, Month);
let scheduleData: Object[] = [
    {
        Id: 1,
        Subject: 'Testing',
        StartTime: new Date(2021, 10, 16, 10, 0),
        EndTime: new Date(2021, 10, 16, 12, 0),
        IsAllDay: false
    }, {
        Id: 2,
        Subject: 'Vacation',
        StartTime: new Date(2021, 10, 18, 10, 0),
        EndTime: new Date(2021, 10, 18, 12, 0),
        IsAllDay: false
    }
];

let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2021, 10, 15),
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    eventSettings: {
        dataSource: scheduleData
    }
});
scheduleObj.appendTo('#Schedule');

let button: Button = new Button({
  cssClass: 'e-info'
});
button.appendTo('#btn1');
button.element.onclick = (): void => {
    scheduleObj.refreshLayout();
};



