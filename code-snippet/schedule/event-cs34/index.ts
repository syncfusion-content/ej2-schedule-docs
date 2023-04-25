

import { Schedule, Day, Week, WorkWeek, Month, ActionEventArgs} from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month);
let isReadOnly: Function = (data: { [key: string]: Object }): boolean => {
    return (data.EndTime < scheduleObj.selectedDate);
};
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    width: '100%',
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: scheduleData },
    eventRendered: (args: EventRenderedArgs) => {
        if (isReadOnly(args.data)) {
            args.element.classList.add('e-past-app');
        }
    }
});
scheduleObj.appendTo('#Schedule');


