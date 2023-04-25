

import { Schedule, Week, ExcelExport, ExportOptions, ExportFieldInfo, ActionEventArgs, ToolbarActionArgs } from '@syncfusion/ej2-schedule';
import { ItemModel } from '@syncfusion/ej2-navigations';

Schedule.Inject(Week, ExcelExport);
const data: object[] = [
    {
        Id: 1,
        Subject: 'Explosion of Betelgeuse Star',
        StartTime: new Date(2023, 0, 8, 9, 30),
        EndTime: new Date(2023, 0, 8, 11, 0),
        Location: 'Chennai',
        OwnerId: 1
    }, {
        Id: 2,
        Subject: 'Thule Air Crash Report',
        StartTime: new Date(2023, 0, 10, 12, 0),
        EndTime: new Date(2023, 0, 10, 14, 0),
        Location: 'Mumbai',
        OwnerId: 2
    }, {
        Id: 3,
        Subject: 'Blue Moon Eclipse',
        StartTime: new Date(2023, 0, 13, 9, 30),
        EndTime: new Date(2023, 0, 13, 11, 0),
        Location: 'Mumbai',
        OwnerId: 3
    }
];
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2023, 0, 10),
    views: ['Week'],
    eventSettings: { dataSource: data },
    actionBegin: (args: ActionEventArgs & ToolbarActionArgs) => {
        if (args.requestType === 'toolbarItemRendering') {
            let exportItem: ItemModel = {
                align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-excel-export',
                text: 'CSV-Export', cssClass: 'e-excel-export', click: onExportClick
            };
            args.items.push(exportItem);
        }
    }
});
scheduleObj.appendTo('#Schedule');

function onExportClick(): void {
    let exportValues: ExportOptions = {exportType: 'csv', separator: ';'};
    scheduleObj.exportToExcel(exportValues);
}


