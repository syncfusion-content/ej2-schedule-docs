

import { Schedule, Day, Week, WorkWeek, Month, CellClickEventArgs, EventClickArgs } from '@syncfusion/ej2-schedule';
import { Button } from '@syncfusion/ej2-buttons';
import { schedulerData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month);

let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2021, 7, 15),
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    eventSettings: { dataSource: schedulerData },
    showQuickInfo: false,
    cellClick: (args: CellClickEventArgs) => {
        scheduleObj.openEditor(args, 'Add');
    },
    eventClick: (args: EventClickArgs) => {
        if (!(args.event as any).RecurrenceRule) {
            scheduleObj.openEditor(args.event, 'Save');
        }
        else {
            scheduleObj.quickPopup.openRecurrenceAlert();
        }
    }
});
scheduleObj.appendTo('#Schedule');


