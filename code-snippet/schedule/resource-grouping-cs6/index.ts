

import { Schedule, Day, Week, Month, Resize, DragAndDrop } from '@syncfusion/ej2-schedule';
import { extend } from '@syncfusion/ej2-base';
import { timelineResourceData, resourceData } from './datasource.ts';

Schedule.Inject(Day, Week, Month, Resize, DragAndDrop);
let scheduleObj: Schedule = new Schedule({
    width: '100%', height: '555px',
    views: ['Day', 'Week', 'Month'],
    currentView: 'Month',
    selectedDate: new Date(2018, 3, 4),
    enableAdaptiveUI: true,
    group: {
        resources: ['Projects', 'Categories']
    },
    resources: [
        {
            field: 'ProjectId', title: 'Choose Project', name: 'Projects',
            dataSource: [
                { text: 'PROJECT 1', id: 1, color: '#cb6bb2' },
                { text: 'PROJECT 2', id: 2, color: '#56ca85' },
                { text: 'PROJECT 3', id: 3, color: '#df5286' }
            ],
            textField: 'text', idField: 'id', colorField: 'color'
        }, {
            field: 'TaskId', title: 'Category',
            name: 'Categories', allowMultiple: true,
            dataSource: [
                { text: 'Nancy', id: 1, groupId: 1, color: '#df5286' },
                { text: 'Steven', id: 2, groupId: 1, color: '#7fa900' },
                { text: 'Robert', id: 3, groupId: 2, color: '#ea7a57' },
                { text: 'Smith', id: 4, groupId: 2, color: '#5978ee' },
                { text: 'Michael', id: 5, groupId: 3, color: '#df5286' },
                { text: 'Root', id: 6, groupId: 3, color: '#00bdae' }
            ],
            textField: 'text', idField: 'id', groupIDField: 'groupId', colorField: 'color'
        }
    ],
    eventSettings: {
        dataSource: <Object[]> extend([], resourceData.concat(timelineResourceData), null, true)
    }
});
scheduleObj.appendTo('#Schedule');


