

import {
    Schedule, Week, Month, TimelineViews, TimelineMonth
} from '@syncfusion/ej2-schedule';
import { resourceData } from './datasource.ts';
Schedule.Inject(Week, Month, TimelineViews, TimelineMonth);

let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 3, 1),
    views: ['Week', 'Month', 'TimelineWeek', 'TimelineMonth'],
    group: {
        resources: ['Rooms', 'Owners'],
        headerTooltipTemplate: '#tooltipTemplate'
    },
    resources: [
        {
            field: 'OwnerId', title: 'Owner',
            name: 'Owners', allowMultiple: true,
            dataSource: [
                { OwnerText: 'Nancy', Id: 1, OwnerGroupId: 1, OwnerColor: '#ffaa00' },
                { OwnerText: 'Steven', Id: 2, OwnerGroupId: 2, OwnerColor: '#f8a398' },
                { OwnerText: 'Michael', Id: 3, OwnerGroupId: 1, OwnerColor: '#7499e1' }
            ],
            textField: 'OwnerText', idField: 'Id', groupIDField: 'OwnerGroupId', colorField: 'OwnerColor'
        }
    ],
    eventSettings: { dataSource: resourceData }
});
scheduleObj.appendTo('#Schedule');


