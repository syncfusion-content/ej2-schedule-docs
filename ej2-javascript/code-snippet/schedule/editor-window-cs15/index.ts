

import { Schedule, Day, Week, WorkWeek, Month, MoreEventsClickArgs } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Schedule.Inject(Day, Week, WorkWeek, Month);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    currentView: 'Month',
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    eventSettings: { dataSource: scheduleData },
    popupOpen: (args: PopupOpenEventArgs) => {
    if (args.type === 'Editor') {
      if (!args.element.querySelector('#closeEditor')) {
        let btnElement = createElement("BUTTON", { id: 'closeEditor', className: 'e-custom-close' });
        args.element.querySelector('.e-footer-content').appendChild(btnElement)
        let btnObj: Button = new Button();
        btnElement.textContent = "Close Editor";
        btnObj.appendTo('#closeEditor');
        btnObj.element.onclick = (): void => {
          scheduleObj.closeEditor();
        }
      }
    }
  },
});
scheduleObj.appendTo('#Schedule');


