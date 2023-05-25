


import { CheckBox, ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { Schedule, Month, TimelineMonth } from '@syncfusion/ej2-schedule';
import { holidayData, birthdayData, companyData, personalData } from './datasource.ts';

Schedule.Inject(Month, TimelineMonth);

let calendarCollections: Object[] = [
    { CalendarText: 'My Calendar', CalendarId: 1, CalendarColor: '#c43081' },
    { CalendarText: 'Company', CalendarId: 2, CalendarColor: '#ff7f50' },
    { CalendarText: 'Birthday', CalendarId: 3, CalendarColor: '#AF27CD' },
    { CalendarText: 'Holiday', CalendarId: 4, CalendarColor: '#808000' }
];

let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 3, 1),
    group: {
        resources: ['Calendars']
    },
    resources: [{
        field: 'CalendarId', title: 'Calendar',
        name: 'Calendars', allowMultiple: true,
        dataSource: [calendarCollections[0]],
        textField: 'CalendarText', idField: 'CalendarId', colorField: 'CalendarColor'
    }],
    views: ['Month', 'TimelineMonth'],
    eventSettings: { dataSource: generateCalendarData() }
});
scheduleObj.appendTo('#Schedule');

function onChange(args: ChangeEventArgs): void {
    let value: number = parseInt((<Element>args.event.target).getAttribute('value'), 10);
    let resourceData: Object[] = calendarCollections.filter((calendar: { [key: string]: Object }) => calendar.CalendarId === value);
    if (args.checked) {
        scheduleObj.addResource(resourceData[0], 'Calendars', value - 1);
    } else {
        scheduleObj.removeResource(value, 'Calendars');
    }
}

new CheckBox({ value: '1', label: 'My Calendar', checked: true, disabled: true, change: onChange }, '#personal');
new CheckBox({ value: '2', label: 'Company', checked: false, change: onChange }, '#company');
new CheckBox({ value: '3', label: 'Birthday', checked: false, change: onChange }, '#birthdays');
new CheckBox({ value: '4', label: 'Holiday', checked: false, change: onChange }, '#holidays');

function generateCalendarData(): Object[] {
    let collections: Object[] = [];
    let dataCollections: Object[][] = [personalData, companyData, birthdayData, holidayData];
    for (let data of dataCollections) {
        collections = collections.concat(data);
    }
    return collections;
}


