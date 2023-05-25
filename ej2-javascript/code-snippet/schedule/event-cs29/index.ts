

import { Schedule, Day, Week, WorkWeek, Month, ActionEventArgs} from '@syncfusion/ej2-schedule';

Schedule.Inject(Day, Week, WorkWeek, Month);

let data: object[] = [{
        Id: 13,
        Subject: 'Myths of Andromeda Galaxy',
        StartTime: new Date(2018, 1, 16, 10, 30),
        EndTime: new Date(2018, 1, 16, 10, 40)
    }, {
        Id: 14,
        Subject: 'Aliens vs Humans',
        StartTime: new Date(2018, 1, 15, 10, 0),
        EndTime: new Date(2018, 1, 15, 10, 20)
    }];
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    width: '100%',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    eventSettings: { dataSource: data },
    eventRendered: (args: EventRenderedArgs) => {
        let cellHeight: number = (scheduleObj.element.querySelector('.e-work-cells') as HTMLElement).offsetHeight;
        let appHeight: number = (args.data.EndTime.getTime() - args.data.StartTime.getTime()) / (60 * 1000) * (cellHeight * scheduleObj.timeScale.slotCount) / scheduleObj.timeScale.interval;
        args.element.style.height = appHeight+'px';
    }
});
scheduleObj.appendTo('#Schedule');


