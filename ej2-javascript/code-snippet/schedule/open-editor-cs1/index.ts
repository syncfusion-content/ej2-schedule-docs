

import { Schedule, Day, Week, WorkWeek, Month} from '@syncfusion/ej2-schedule';
import { Button } from '@syncfusion/ej2-buttons';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month);

let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

    let button1: Button = new Button();
    button1.appendTo('#btn1');
    let button2: Button = new Button();
    button2.appendTo('#btn2');
    button1.element.onclick = (): void => {
    let cellData: Object ={
        startTime: new Date(2018, 1, 15, 10, 0),
        endTime: new Date(2018, 1, 15, 11, 0),
        };
        scheduleObj.openEditor(cellData,'Add');
    };
    button2.element.onclick = (): void => {
    let eventData: Object ={
        Id: 4,
        Subject: 'Meteor Showers in 2018',
        StartTime: new Date(2018, 1, 14, 13, 0),
        EndTime: new Date(2018, 1, 14, 14, 30)
    };
    scheduleObj.openEditor(eventData,'Save');
    };


