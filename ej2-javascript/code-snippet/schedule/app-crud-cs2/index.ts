

import { Schedule, Day, Week, WorkWeek, Month} from '@syncfusion/ej2-schedule';
import { Button } from '@syncfusion/ej2-buttons';
import { DataManager, Query, Predicate } from '@syncfusion/ej2-data';

Schedule.Inject(Day, Week, WorkWeek, Month);
let scheduleData: Object[] = [{
    Id: 3,
    Subject: 'Testing',
    StartTime: new Date(2018, 1, 11, 9, 0),
    EndTime: new Date(2018, 1, 11, 10, 0),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=3'
},{
    Id: 4,
    Subject: 'Vacation',
    StartTime: new Date(2018, 1, 12, 11, 0),
    EndTime: new Date(2018, 1, 12, 12, 0),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=2'
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
    StartTime: new Date(2018, 1, 15, 9, 0),
    EndTime: new Date(2018, 1, 15, 10, 0),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=2'
}];
scheduleObj.addEvent(Data);
button.element.setAttribute('disabled', 'true');
};
let button2: Button = new Button();
button2.appendTo('#btn2');
button2.element.onclick = (): void => {
let data: Object = new DataManager(scheduleObj.getCurrentViewEvents()).executeLocal(new Query().where('RecurrenceID', 'equal', 3));
data[0].Subject = 'Occurence edited';
scheduleObj.saveEvent(data[0],'EditOccurrence');
button2.element.setAttribute('disabled', 'true');
};
let button3: Button = new Button();
button3.appendTo('#btn3');
button3.element.onclick = (): void => {
let scheduleData: { [key: string]: Object }[] = [{
    Id: 4,
    Subject: 'Vacation',
    RecurrenceID: 4,
    StartTime: new Date(2018, 1, 12, 11, 0),
    EndTime: new Date(2018, 1, 12, 12, 0),
    IsAllDay: false,
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=2'
}];
scheduleObj.deleteEvent(scheduleData,'DeleteSeries');
button3.element.setAttribute('disabled', 'true');
};


