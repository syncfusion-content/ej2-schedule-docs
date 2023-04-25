

import { removeClass } from '@syncfusion/ej2-base';
import { Schedule, Day, Week, WorkWeek, Month, Agenda, RenderCellEventArgs } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '500px',
    selectedDate: new Date(2018, 1, 15),
    currentView: 'WorkWeek',
    renderCell: (args: RenderCellEventArgs) => {
      if(args.elementType === "dateHeader" || args.elementType === "monthCells") {
        removeClass(args.element.childNodes, "e-navigate");
      }
    },
    eventSettings: {
        dataSource: scheduleData
    }
});
scheduleObj.appendTo('#Schedule');


