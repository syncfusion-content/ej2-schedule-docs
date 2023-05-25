

import { CheckBox } from '@syncfusion/ej2-buttons';
import { Query, Predicate } from '@syncfusion/ej2-data';
import { Schedule, Day, Week, WorkWeek, Month, Agenda, EventRenderedArgs } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);

let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: scheduleData },
    eventRendered: (args: EventRenderedArgs) => {
    switch (args.data.EventType) {
        case 'Requested':
            (args.element as HTMLElement).style.backgroundColor = '#F57F17';
            break;
        case 'Confirmed':
            (args.element as HTMLElement).style.backgroundColor = '#7fa900';
            break;
        case 'New':
            (args.element as HTMLElement).style.backgroundColor = '#8e24aa';
            break;
    }
}
};
scheduleObj.appendTo('#Schedule');

function onChange(): void {
    let predicate: Predicate;
    let checkBoxes: CheckBox[] = [confirm, request, fresh];
    checkBoxes.forEach((checkBoxObj: CheckBox) => {
        if (checkBoxObj.checked) {
            if (predicate) {
                predicate = predicate.or('EventType', 'equal', checkBoxObj.label);
            } else {
                predicate = new Predicate('EventType', 'equal', checkBoxObj.label);
            }
        }
    });
    scheduleObj.eventSettings.query = new Query().where(predicate);
}

let confirm: CheckBox = new CheckBox({ label: 'Confirmed', checked: true, change: onChange }, '#confirmed');
let request: CheckBox = new CheckBox({ label: 'Requested', checked: true, change: onChange }, '#requested');
let fresh: CheckBox = new CheckBox({ label: 'New', checked: true, change: onChange }, '#new');


