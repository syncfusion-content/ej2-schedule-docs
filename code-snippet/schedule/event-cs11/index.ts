

import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';

let data: object [] = [{
    Id: 1,
    Subject: 'Rank 1',
    StartTime: new Date(2017, 9, 29, 10, 0),
    EndTime: new Date(2017, 9, 29, 11, 30),
    IsAllDay: false,
    RankId: '1'
}, {
    Id: 2,
    Subject: 'Rank 3',
    StartTime: new Date(2017, 9, 29, 10, 30),
    EndTime: new Date(2017, 9, 29, 12, 30),
    IsAllDay: false,
    RankId: '3'
 }, {
    Id: 3,
    Subject: 'Rank 6',
    StartTime: new Date(2017, 9, 29, 7, 0),
    EndTime: new Date(2017, 9, 29, 14, 30),
    IsAllDay: false,
    RankId: '6'
}, {
    Id: 4,
    Subject: 'Rank 9',
    StartTime: new Date(2017, 9, 29, 11, 0),
    EndTime: new Date(2017, 9, 29, 15, 30),
    IsAllDay: false,
    RankId: '9'
}];
let comparerFun: SortComparerFunction = (args: Record<string, any>) =>
  args.sort((event1: Record<string, any>, event2: Record<string, any>) =>
    event1.RankId.localeCompare(event2.RankId, undefined, { numeric: true })
  );
Schedule.Inject(Day, Week, WorkWeek, Month, Agenda );
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2017, 9, 29),
    eventSettings: {
        dataSource: data,
        sortComparer: comparerFun
    }
});
scheduleObj.appendTo('#Schedule');


