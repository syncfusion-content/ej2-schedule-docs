

import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';
import { DataManager } from '@syncfusion/ej2-data';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
let dataManager: DataManager = new DataManager({
    url: 'http://some.com/invalidUrl'
});

let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2017, 5, 11),
    eventSettings: { dataSource: dataManager },
    actionFailure: () => {
       let span: HTMLElement = document.createElement('span');
       scheduleObj.element.parentNode.insertBefore(span, scheduleObj.element);
       span.style.color = '#FF0000'
       span.innerHTML = 'Server exception: 404 Not found';
    }
});
scheduleObj.appendTo('#Schedule');


