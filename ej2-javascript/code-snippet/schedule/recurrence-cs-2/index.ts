import { Schedule, Day, Week, WorkWeek, Month, Agenda, RecurrenceEditor, PopupOpenEventArgs } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
let scheduleObj: Schedule = new Schedule({
    width: '100%', height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: scheduleData },
    popupOpen: (args: PopupOpenEventArgs): void => {
        if (args.type == 'Editor') {
            scheduleObj.eventWindow.recurrenceEditor.endTypes = ['until', 'count'];
        }
    }
});
scheduleObj.appendTo('#Schedule');


