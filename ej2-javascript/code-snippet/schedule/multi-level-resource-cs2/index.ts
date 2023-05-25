

import { Schedule, Week, Month, TimelineViews, TimelineMonth, Agenda } from '@syncfusion/ej2-schedule';
import { resourceData } from './datasource.ts';

Schedule.Inject(Week, Month, TimelineViews, TimelineMonth, Agenda );
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    currentView: 'Week',
    views: ['Week' , 'Month','TimelineWeek', 'TimelineMonth', 'Agenda'],
    selectedDate: new Date(2018, 3, 1),
    group: {
        byGroupID: false,
        resources: ['Rooms', 'Owners']
    },
    resources: [{
        field: 'RoomId', title: 'Room',
        name: 'Rooms', allowMultiple: false,
        dataSource: [
            { RoomText: 'ROOM 1', Id: 1, RoomColor: '#cb6bb2' },
            { RoomText: 'ROOM 2', Id: 2, RoomColor: '#56ca85' }
        ],
        textField: 'RoomText', idField: 'Id', colorField: 'RoomColor'
        },{
        field: 'OwnerId', title: 'Owner',
        name: 'Owners', allowMultiple: true,
        dataSource: [
            { OwnerText: 'Nancy', Id: 1, OwnerColor: '#ffaa00' },
            { OwnerText: 'Steven', Id: 2, OwnerColor: '#f8a398' },
            { OwnerText: 'Michael', Id: 3, OwnerColor: '#7499e1' }
        ],
        textField: 'OwnerText', idField: 'Id', colorField: 'OwnerColor'
    }],
    eventSettings: { dataSource: resourceData }
});
scheduleObj.appendTo('#Schedule');


