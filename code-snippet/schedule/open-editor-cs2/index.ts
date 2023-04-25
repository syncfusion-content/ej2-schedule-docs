

import { Schedule, Day, Week, WorkWeek, Month} from '@syncfusion/ej2-schedule';
import { Button } from '@syncfusion/ej2-buttons';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month);

let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    workHours: {
        highlight: true,
        start: '09:00',
        end: '11:00'
    },
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');
    let button: Button = new Button();
    button.appendTo('#btn1');
    let btnElement: HTMLElement = <HTMLElement>document.querySelector('#btn1');
    let btnElement2: HTMLElement = <HTMLElement>document.querySelector('#btn2');
    btnElement.innerText = 'Change the work hours';
    btnElement2.style.display='none';
    button.element.onclick = (): void => {
    let dates: Date[] = [new Date(2018, 1, 15), new Date(2018, 1, 17)];
    scheduleObj.setWorkHours(dates, '11:00','20:00');
    };


