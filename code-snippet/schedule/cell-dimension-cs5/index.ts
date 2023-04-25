

import { createElement } from '@syncfusion/ej2-base';
import { Schedule, Day, Week, Month, RenderCellEventArgs } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, Month);
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 14),
    currentView: 'Month',
    views: ['Day','Week', 'Month'],
    renderCell: (args: RenderCellEventArgs) => {
        if (args.elementType == 'workCells' || args.elementType == 'monthCells') {
            let weekEnds: number[] = [0, 6];
            if (weekEnds.indexOf((args.date).getDay()) >= 0) {
                let ele: HtmlElement = createElement('div', {
                    innerHTML: "<img src='https://ej2.syncfusion.com/demos/src/schedule/images/newyear.svg' />",
                    className: 'templatewrap'
                });
                (args.element).appendChild(ele);
            }
        }
    },
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


