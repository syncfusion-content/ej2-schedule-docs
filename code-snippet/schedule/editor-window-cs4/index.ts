

import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { createElement } from '@syncfusion/ej2-base';
import { Schedule, Day, Week, WorkWeek, Month, PopupOpenEventArgs } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'WorkWeek', 'Month'],
    popupOpen: (args: PopupOpenEventArgs) => {
        if (args.type === 'Editor') {
            // Create required custom elements in initial time
          if (!args.element.querySelector('.custom-field-row')) {
              let row: HTMLElement = createElement('div', { className: 'custom-field-row' });
              let formElement: HTMLElement = args.element.querySelector('.e-schedule-form');
              formElement.firstChild.insertBefore(row, args.element.querySelector('.e-title-location-row'));
              let container: HTMLElement = createElement('div', { className: 'custom-field-container' });
              let inputEle: HTMLInputElement = createElement('input', {
                  className: 'e-field', attrs: { name: 'EventType' }
              }) as HTMLInputElement;
              container.appendChild(inputEle);
              row.appendChild(container);
              let dropDownList: DropDownList = new DropDownList({
                  dataSource: [
                    { text: 'Public Event', value: 'public-event' },
                    { text: 'Maintenance', value: 'maintenance' },
                    { text: 'Commercial Event', value: 'commercial-event' },
                    { text: 'Family Event', value: 'family-event' }
                  ],
                    fields: { text: 'text', value: 'value' },
                    value: (<{ [key: string]: Object }>(args.data)).EventType as string,
                    floatLabelType: 'Always', placeholder: 'Event Type'
              });
              dropDownList.appendTo(inputEle);
              inputEle.setAttribute('name', 'EventType');
        }
      }
    },
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


