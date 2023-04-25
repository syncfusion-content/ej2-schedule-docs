

import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
let minValidation: (args: { [key: string]: string }) => boolean = (args: { [key: string]: string }) => {
    return args['value'].length >= 5;
};
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '500px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: {
        dataSource: scheduleData,
        fields: {
            id: 'Id',
            subject: { name: 'Subject', validation: { required: true } },
            location: { name: 'Location', validation: { required: true } },
            description: {
                name: 'Description', validation: {
                    required: true, minLength: [minValidation, 'Need atleast 5 letters to be entered']
                }
            },
            startTime: { name: 'StartTime', validation: { required: true } },
            endTime: { name: 'EndTime', validation: { required: true } }
        }
    }
});
scheduleObj.appendTo('#Schedule');


