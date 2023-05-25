

import { Schedule, Day, Week, WorkWeek, Month, Agenda View, EventRenderedArgs } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);

let scheduleObj: Schedule = new Schedule({
    height: '550px',
    width: '100%',
    cssClass: 'custom-class',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: scheduleData },
    eventRendered: (args: EventRenderedArgs) => applyCategoryColor(args, scheduleObj.currentView)
});
scheduleObj.appendTo('#Schedule');
function applyCategoryColor(args: EventRenderedArgs, currentView: View): void {
    let categoryColor: string = args.data.CategoryColor as string;
    if (!args.element || !categoryColor) {
        return;
    }
    if (scheduleObj.currentView === 'Agenda') {
        (args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
    } else {
        args.element.style.backgroundColor = categoryColor;
    }
}


