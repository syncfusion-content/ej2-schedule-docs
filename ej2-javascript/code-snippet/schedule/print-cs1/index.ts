

import { extend } from '@syncfusion/ej2-base';
import { ItemModel } from '@syncfusion/ej2-navigations';
import { Schedule, Day, Week, WorkWeek, Month, Agenda, ActionEventArgs, ToolbarActionArgs, Print } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda, Print);

let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '520px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: scheduleData },
    actionBegin: (args: ActionEventArgs & ToolbarActionArgs) => {
        if (args.requestType === 'toolbarItemRendering') {
            let printItem: ItemModel = {
                align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-print',
                text: 'Print', cssClass: 'e-schedule-print', click: onPrintIconClick
            };
            args.items.push(printItem);
        }
    }
});
scheduleObj.appendTo('#Schedule');

function onPrintIconClick(): void {
    scheduleObj.print();
}


