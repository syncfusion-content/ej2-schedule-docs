

import { Schedule, Week, Month, Agenda, TimelineViews, TimelineMonth, Resize } from '@syncfusion/ej2-schedule';

Schedule.Inject(Month, Week, Agenda, TimelineViews, TimelineMonth, Resize);
let resourceConferenceData: Object[] = [
    {
        Id: 1,
        Subject: 'Burning Man',
        StartTime: new Date(2018, 5, 1, 15, 0),
        EndTime: new Date(2018, 5, 1, 17, 0),
        ConferenceId: [1, 2, 3]
    }, {
        Id: 2,
        Subject: 'Data-Driven Economy',
        StartTime: new Date(2018, 5, 2, 12, 0),
        EndTime: new Date(2018, 5, 2, 14, 0),
        ConferenceId: [1, 2]
    }, {
        Id: 3,
        Subject: 'Techweek',
        StartTime: new Date(2018, 5, 2, 15, 0),
        EndTime: new Date(2018, 5, 2, 17, 0),
        ConferenceId: [2, 3]
    }, {
        Id: 4,
        Subject: 'Content Marketing World',
        StartTime: new Date(2018, 5, 2, 18, 0),
        EndTime: new Date(2018, 5, 2, 20, 0),
        ConferenceId: [1, 3]
    }, {
        Id: 5,
        Subject: 'B2B Marketing Forum',
        StartTime: new Date(2018, 5, 3, 10, 0),
        EndTime: new Date(2018, 5, 3, 12, 0),
        ConferenceId: [1, 2, 3]
    }];
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 5, 5),
    views: ['Week', 'Month', 'TimelineWeek', 'TimelineMonth', 'Agenda'],
    currentView: 'Week',
    group: {
        allowGroupEdit: true,
        resources: ['Conferences']
    },
    resources: [{
        field: 'ConferenceId', title: 'Conference',
        name: 'Conferences', allowMultiple: true,
        dataSource: [
            { Text: 'Margaret', Id: 1, Color: '#1aaa55' },
            { Text: 'Robert', Id: 2, Color: '#357cd2' },
            { Text: 'Laura', Id: 3, Color: '#7fa900' }
        ],
        textField: 'Text', idField: 'Id', colorField: 'Color'
    }],
    eventSettings: { dataSource: resourceConferenceData }
});
scheduleObj.appendTo('#Schedule');


