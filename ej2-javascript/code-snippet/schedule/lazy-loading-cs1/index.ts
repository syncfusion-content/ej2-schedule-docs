

import { Schedule, TimelineMonth } from '@syncfusion/ej2-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

Schedule.Inject(TimelineMonth);

let resourceData: Object[] = generateResourceData(1, 1000, 'Resource');
let dataManager: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/VirtualEventData',
    adaptor: new WebApiAdaptor,
    crossDomain: true
});
let scheduleObj: Schedule = new Schedule({
    height: '550px', width: '100%',
    currentView: 'TimelineMonth',
    views: [
        { option: 'TimelineMonth', enableLazyLoading: true }
    ],
    group: {
        resources: ['Resources']
    },
    resources: [
        {
            field: 'ResourceId', title: 'Resources',
            name: 'Resources',
            dataSource: resourceData,
            textField: 'Text', idField: 'Id', colorField: 'Color'
        }
    ],
    selectedDate: new Date(2023, 3, 1),
    eventSettings: { dataSource: dataManager }
});
scheduleObj.appendTo('#Schedule');

function generateResourceData(startId: number, endId: number, text: string): Object[] {
    let data: { [key: string]: Object }[] = [];
    let colors: string[] = [
        '#ff8787', '#9775fa', '#748ffc', '#3bc9db', '#69db7c',
        '#fdd835', '#748ffc', '#9775fa', '#df5286', '#7fa900',
        '#fec200', '#5978ee', '#00bdae', '#ea80fc'
    ];
    for (let a: number = startId; a <= endId; a++) {
        let n: number = Math.floor(Math.random() * colors.length);
        data.push({
            Id: a,
            Text: text + ' ' + a,
            Color: colors[n]
        });
    }
    return data;
}


