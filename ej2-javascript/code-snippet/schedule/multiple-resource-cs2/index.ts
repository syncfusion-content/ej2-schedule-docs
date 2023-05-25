

import { Schedule, Week,WorkWeek, Month } from '@syncfusion/ej2-schedule';
import { doctorData } from './datasource.ts';

Schedule.Inject(Month, Week, WorkWeek);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 3, 1),
    views: ['Week', 'WorkWeek', 'Month'],
    currentView: 'WorkWeek',
    group: {
        resources: ['Doctors']
    },
    resources: [{
        field: 'DoctorId', title: 'Choose Doctor',
        name: 'Doctors', allowMultiple: true,
        dataSource: [
            { text: 'Will Smith', id: 1, color: '#ea7a57', workDays: [1, 2, 4, 5] },
            { text: 'Alice', id: 2, color: 'rgb(53, 124, 210)', workDays: [1, 3, 5] },
            { text: 'Robson', id: 3, color: '#7fa900' , workDays: [2,6]}
        ],
        textField: 'text', idField: 'id', colorField: 'color', workDaysField: 'workDays'
    }],
    eventSettings: { dataSource: doctorData }
});
scheduleObj.appendTo('#Schedule');


