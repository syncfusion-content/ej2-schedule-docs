import { Schedule, Day, Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-schedule';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
const today = new Date();
const data: Object[] = [{
    Id: 1,
    Subject: 'Surgery - Andrew',
    EventType: 'Confirmed',
    StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0),
    EndTime: new Date(2018, 1, 12, 10, 0)
}, {
    Id: 2,
    Subject: 'Consulting - John',
    EventType: 'Confirmed',
    StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0),
    EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 30)
}, {
    Id: 3,
    Subject: 'Therapy - Robert',
    EventType: 'Requested',
    StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 30),
    EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 30)
}, {
    Id: 4,
    Subject: 'Observation - Steven',
    EventType: 'Confirmed',
    StartTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 30),
    EndTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 30)
}]
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    showQuickInfo: false,
    editorHeaderTemplate: '#editor-header',
    eventSettings: { dataSource: data },
});
scheduleObj.appendTo('#Schedule');


