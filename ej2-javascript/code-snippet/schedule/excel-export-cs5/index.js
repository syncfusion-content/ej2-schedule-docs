var data = [
    {
        Id: 1,
        Subject: 'Explosion of Betelgeuse Star',
        StartTime: new Date(2018, 1, 16, 9, 30),
        EndTime: new Date(2018, 1, 16, 11, 0),
        Location: 'Chennai',
        OwnerId: 1
    }, {
        Id: 2,
        Subject: 'Thule Air Crash Report',
        StartTime: new Date(2018, 1, 12, 12, 0),
        EndTime: new Date(2018, 1, 12, 14, 0),
        Location: 'Mumbai',
        OwnerId: 2
    }, {
        Id: 3,
        Subject: 'Blue Moon Eclipse',
        StartTime: new Date(2018, 1, 13, 9, 30),
        EndTime: new Date(2018, 1, 13, 11, 0),
        Location: 'Mumbai',
        OwnerId: 3
    }, {
        Id: 4,
        Subject: 'Meteor Showers in 2018',
        StartTime: new Date(2018, 1, 14, 13, 0),
        EndTime: new Date(2018, 1, 14, 14, 30),
        Location: 'Bangalore',
        OwnerId: 1
    }, {
        Id: 5,
        Subject: 'Milky Way as Melting pot',
        StartTime: new Date(2018, 1, 15, 12, 0),
        EndTime: new Date(2018, 1, 15, 14, 0),
        Location: 'Chennai',
        OwnerId: 2
    }
];
var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: 500,
    selectedDate: new Date(2018, 1, 15),
    views: [
        { option: 'Week' }
    ],
    resources: [
        {
            field: 'OwnerId', title: 'Owner',
            name: 'Owners',
            dataSource: [
                { OwnerText: 'Nancy', Id: 1, OwnerColor: '#ffaa00' },
                { OwnerText: 'Steven', Id: 2, OwnerColor: '#f8a398' },
                { OwnerText: 'Michael', Id: 3, OwnerColor: '#7499e1' }
            ],
            textField: 'OwnerText', idField: 'Id', colorField: 'OwnerColor'
        }
    ],
    eventSettings: { dataSource: data },
    actionBegin: function (args) {
        if (args.requestType === 'toolbarItemRendering') {
            var exportItem = {
                align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-excel-export',
                text: 'Excel Export', cssClass: 'e-excel-export', click: onExportClick
            };
            args.items.push(exportItem);
        }
    }
});
scheduleObj.appendTo('#Schedule');

function onExportClick() {
    var customFields = [
        { name: 'Subject', text: 'Summary' },
        { name: 'StartTime', text: 'First Date' },
        { name: 'EndTime', text: 'Last Date' },
        { name: 'Location', text: 'Place' },
        { name: 'OwnerId', text: 'Owners' }
    ];
    var exportValues = { fieldsInfo: customFields };
    scheduleObj.exportToExcel(exportValues);
}


