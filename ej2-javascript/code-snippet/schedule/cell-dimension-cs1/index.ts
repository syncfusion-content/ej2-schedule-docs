

import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { Schedule, Day, TimelineViews, WorkWeek, Month, ActionEventArgs} from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, TimelineViews, WorkWeek, Month);

let scheduleObj: Schedule = new Schedule({
    height: '550px',
    width: '100%',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'TimelineWeek', 'WorkWeek', 'Month'],
    currentView: 'TimelineWeek',
    eventSettings: { dataSource: scheduleData },
    actionBegin: (args: ActionEventArgs) => {
        if ((args.requestType === 'eventCreate' || args.requestType === 'eventChange') && (<Object[]>args.data).length > 0 || !isNullOrUndefined(args.data)) {
            let eventData: any = args.data as any;
            let eventField: EventFieldsMapping = scheduleObj.eventFields;
            let startDate: Date = (((<Object[]>args.data).length > 0) ? eventData[0][eventField.startTime] : eventData[eventField.startTime]) as Date;
            let endDate: Date = (((<Object[]>args.data).length > 0) ? eventData[0][eventField.endTime] : eventData[eventField.endTime]) as Date;
            args.cancel = !scheduleObj.isSlotAvailable(startDate, endDate);
        }
    }
});
scheduleObj.appendTo('#Schedule');


