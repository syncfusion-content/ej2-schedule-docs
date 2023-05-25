

import { Schedule, Day, Week, WorkWeek, Month, Agenda, ActionEventArgs } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);

let scheduleObj: Schedule = new Schedule({
  width: '100%',
  height: '550px',
  selectedDate: new Date(2018, 1, 15),
  eventSettings: { dataSource: scheduleData },
  actionBegin: (args: ActionEventArgs) => {
    let weekEnds: number[] = [0, 6];
    if (args.requestType == 'eventCreate' && weekEnds.indexOf((args.data[0].StartTime).getDay()) >= 0) {
      args.cancel = true;
    }
  }
});
scheduleObj.appendTo('#Schedule');


