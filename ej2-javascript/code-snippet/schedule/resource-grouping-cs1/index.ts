

import { Schedule, Week, Month, Agenda } from '@syncfusion/ej2-schedule';
import { resourceConferenceData } from './datasource.ts';

Schedule.Inject( Week, Month, Agenda );
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    currentView: 'Week',
    views: ['Week', 'Month', 'Agenda'],
    selectedDate: new Date(2018, 3, 4),
    group: {
        byGroupID: false,
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
                { text: 'Development', id: 1, color: '#df5286' },
                { text: 'Testing', id: 2, color: '#7fa900' }
            ],
            textField: 'text', idField: 'id', colorField: 'color'
        }
    ],
    eventSettings: { dataSource: resourceConferenceData }
    });
    scheduleObj.appendTo('#Schedule');


