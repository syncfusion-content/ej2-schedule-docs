

import { Schedule, Week, ExcelExport, ExportOptions, ActionEventArgs, ToolbarActionArgs } from '@syncfusion/ej2-schedule';
import { ItemModel } from '@syncfusion/ej2-navigations';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Week, ExcelExport);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2019, 0, 10),
    views: ['Week'],
    eventSettings: { dataSource: scheduleData },
    actionBegin: (args: ActionEventArgs & ToolbarActionArgs) => {
        if (args.requestType === 'toolbarItemRendering') {
            let exportItem: ItemModel = {
                align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-excel-export',
                text: 'Excel Export', cssClass: 'e-excel-export', click: onExportClick
            };
            args.items.push(exportItem);
        }
    }
});
scheduleObj.appendTo('#Schedule');

function onExportClick(): void {
    let exportValues: ExportOptions = { exportType: "csv" };
    scheduleObj.exportToExcel(exportValues);
}


