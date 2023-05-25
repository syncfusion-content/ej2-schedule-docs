

import {
    Schedule, Week, Month, TimelineViews, TimelineMonth, Agenda
} from '@syncfusion/ej2-schedule';
import { doctorData } from './datasource.ts';
Schedule.Inject(Week, Month, TimelineViews, TimelineMonth, Agenda);

let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 3, 1),
    resourceHeaderTemplate: '#resourceTemplate',
    views: ['Week', 'Month', 'TimelineWeek', 'TimelineMonth', 'Agenda'],
    group: {
        resources: ['Doctors']
    },
    resources: [{
        field: 'DoctorId', title: 'Doctor Name', name: 'Doctors',
            dataSource: [
                { text: 'Will Smith', id: 1, color: '#ea7a57', designation: 'Cardioligst' },
                { text: 'Alice', id: 2, color: '#7fa900', designation: 'Neurologist' },
                { text: 'Robson', id: 3, color: '#7fa900', designation: 'Orthopedic Surgeon'  }
            ],
        textField: 'text', idField: 'id', colorField: 'color', designationField: 'designation'
    }],
    eventSettings: { dataSource: doctorData }
});
scheduleObj.appendTo('#Schedule');


