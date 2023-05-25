

import { L10n } from '@syncfusion/ej2-base';
import { Schedule, Day, Week, TimelineViews, Month, Agenda } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, TimelineViews, Month, Agenda);
L10n.load({
    'en-US': {
        'schedule': {
            'saveButton': 'Add',
            'cancelButton': 'Close',
            'deleteButton': 'Remove',
            'newEvent': 'Add Event',
        },
    }
});
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['TimelineDay', 'Day', 'Week', 'Month', 'Agenda'],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


