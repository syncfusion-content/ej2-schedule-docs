

import { Schedule, Day, Week, WorkWeek, Month, Agenda, ActionEventArgs } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);

let scheduleObj: Schedule = new Schedule({
  width: '100%',
  height: '550px',
  selectedDate: new Date(2018, 1, 15),
  eventSettings: { dataSource: scheduleData },
  actionBegin: (args: ActionEventArgs) => {
    if (args.requestType == 'eventChange') {
      let weekEnds: number[] = [0, 6];
      let data: { [key: string]: Object } = args.data as { [key: string]: Object };
      let weekDay: boolean = weekEnds.indexOf((data.StartTime as Date).getDay()) >= 0;
      let workHours: boolean = ((parseInt(scheduleObj.workHours.start.toString().slice(0, 2), 10) <= (data.StartTime as Date).getHours()) && (parseInt(scheduleObj.workHours.end.toString().slice(0, 2), 10)) >= (data.StartTime as Date).getHours());
      if (weekDay || !workHours) {
        args.cancel = true;
      }
    }
  }
});
scheduleObj.appendTo('#Schedule');


