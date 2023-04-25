

import { Schedule, Week, Month, TimelineViews, TimelineMonth } from '@syncfusion/ej2-schedule';
import { doctorData } from './datasource.ts';

Schedule.Inject(Week, Month, TimelineViews, TimelineMonth);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 3, 1),
    views: ['Week', 'Month', 'TimelineWeek', 'TimelineMonth'],
    group: {
        resources: ['Doctors']
    },
    resources: [{
        field: 'DoctorId', title: 'Doctor Name',
        name: 'Doctors', allowMultiple: true,
        dataSource: [
            { text: 'Will Smith', id: 1, color: '#ea7a57', startHour: '08:00', endHour: '15:00' },
            { text: 'Alice', id: 2, color: '#357cd2', startHour: '10:00', endHour: '18:00'},
            { text: 'Robson', id: 3, color: '#7fa900', startHour: '06:00', endHour: '13:00' }
        ],
        textField: 'text', idField: 'id', colorField: 'color', startHourField: 'startHour', endHourField: 'endHour'
    }],
    eventSettings: { dataSource: doctorData }
});
scheduleObj.appendTo('#Schedule');


