

import { DataManager, Query, Predicate } from '@syncfusion/ej2-data';
import { Schedule, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-schedule';
import { Button } from '@syncfusion/ej2-buttons';

Schedule.Inject(Day, Week, WorkWeek, Month);
let scheduleData: Object[] = [{
  Id: 3,
  Subject: 'Testing',
  StartTime: new Date(2018, 1, 11, 9, 0),
  EndTime: new Date(2018, 1, 11, 10, 0),
  IsAllDay: false,
  RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=3'
}, {
  Id: 4,
  Subject: 'Vacation',
  StartTime: new Date(2018, 1, 12, 11, 0),
  EndTime: new Date(2018, 1, 12, 12, 0),
  IsAllDay: false,
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

let edit: Button = new Button();
edit.appendTo('#edit');
edit.element.onclick = (): void => {
  let data: Object = new DataManager(scheduleObj.getCurrentViewEvents()).executeLocal(new Query().where('RecurrenceID', 'equal', 3));
  data[0].Subject = 'Edited';
  scheduleObj.saveEvent(data[0], 'EditOccurrence');
  edit.element.setAttribute('disabled', 'true');
};


