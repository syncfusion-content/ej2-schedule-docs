


import {
    Schedule, RenderCellEventArgs, TimelineViews, TimelineMonth
} from '@syncfusion/ej2-schedule';
import {  roomData } from './datasource.ts';
Schedule.Inject(TimelineViews, TimelineMonth);

let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 7, 1),
    resourceHeaderTemplate: '#resourceTemplate',
    views: ['TimelineWeek', 'TimelineMonth'],
    group: {
        resources: ['MeetingRoom']
    },
    resources: [{
        field: 'RoomId', title: 'Room Type',
        name: 'MeetingRoom', allowMultiple: true,
        dataSource: [
            { text: 'Jammy', id: 1, color: '#ea7a57', capacity: 20, type: 'Conference' },
            { text: 'Tweety', id: 2, color: '#7fa900', capacity: 7, type: 'Cabin' },
            { text: 'Nestle', id: 3, color: '#5978ee', capacity: 5, type: 'Cabin' },
            { text: 'Phoenix', id: 4, color: '#fec200', capacity: 15, type: 'Conference' },
            { text: 'Mission', id: 5, color: '#df5286', capacity: 25, type: 'Conference' },
            { text: 'Hangout', id: 6, color: '#00bdae', capacity: 10, type: 'Cabin' },
            { text: 'Rick Roll', id: 7, color: '#865fcf', capacity: 20, type: 'Conference' },
            { text: 'Rainbow', id: 8, color: '#1aaa55', capacity: 8, type: 'Cabin' },
            { text: 'Swarm', id: 9, color: '#df5286', capacity: 30, type: 'Conference' },
            { text: 'Photogenic', id: 10, color: '#710193', capacity: 25, type: 'Conference' }
        ],
        textField: 'text', idField: 'id', colorField: 'color'
    }],
    renderCell: (args: RenderCellEventArgs) => {
        if (args.elementType === 'emptyCells' && args.element.classList.contains('e-resource-left-td')) {
            let target: HTMLElement = args.element.querySelector('.e-resource-text') as HTMLElement;
            target.innerHTML = '<div class="name">Rooms</div><div class="type">Type</div><div class="capacity">Capacity</div>';
        }
    },
    eventSettings: { dataSource: roomData }
});
scheduleObj.appendTo('#Schedule');


