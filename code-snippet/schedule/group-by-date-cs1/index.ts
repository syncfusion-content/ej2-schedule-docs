

import { Schedule, Week, Month, Agenda } from '@syncfusion/ej2-schedule';
import { resourceData } from './datasource.ts';

Schedule.Inject(Month, Week, Agenda);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    views: ['Week', 'Month', 'Agenda'],
    selectedDate: new Date(2018, 3, 1),
    group: {
        byDate: true,
        resources: ['Owners']
    },
    resources: [{
        field: 'OwnerId', title: 'Owner',
        name: 'Owners', allowMultiple: true,
        dataSource: [
            { text: 'Alice', id: 1, color: '#1aaa55' },
            { text: 'Smith', id: 2, color: '#7fa900' }
        ],
        textField: 'text', idField: 'id', colorField: 'color'
    }],
    eventSettings: { dataSource: resourceData }
});
scheduleObj.appendTo('#Schedule');


