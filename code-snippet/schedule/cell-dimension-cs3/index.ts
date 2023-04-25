

import { Schedule, Day, Week, WorkWeek, Month, ActionEventArgs, EventFieldsMapping } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month);
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    actionBegin: (args: ActionEventArgs) => {
        if (args.requestType === 'eventCreate' && (<Object[]>args.data).length > 0) {
            let eventData: { [key: string]: Object } = args.data[0] as { [key: string]: Object };
            let eventField: EventFieldsMapping = scheduleObj.eventFields;
            let startDate: Date = eventData[eventField.startTime] as Date;
            let endDate: Date = eventData[eventField.endTime] as Date;
            args.cancel = !scheduleObj.isSlotAvailable(startDate, endDate);
        }
    },
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


