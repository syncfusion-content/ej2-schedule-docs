

import { Schedule, ScheduleModel, Day, Week, Month, Agenda } from '@syncfusion/ej2-schedule';
import * as dataSource from './datasource.json';

/**
 * schedule resources group sample
 */
Schedule.Inject(Day, Week, Month, Agenda);
    let scheduleOptions: ScheduleModel = {
        width: '100%',
        height: '650px',
        group: {
            byDate: true,
            hideNonWorkingDays: true,
            resources: ['Owners']
        },
        resources: [{
            field: 'TaskId', title: 'Assignee',
            name: 'Owners', allowMultiple: true,
            dataSource: [
                { text: 'Alice', id: 1, color: '#df5286', workDays: [1, 2, 3, 4] },
                { text: 'Smith', id: 2, color: '#7fa900', workDays: [2, 3, 5] }
            ],
            textField: 'text', idField: 'id', colorField: 'color', workDaysField: 'workDays'
        }],
    };

    let scheduleObj: Schedule = new Schedule(scheduleOptions);
    scheduleObj.appendTo(document.getElementById('Schedule'));



