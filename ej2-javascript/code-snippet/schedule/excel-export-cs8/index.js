var data = [
        {
            Id: 1,
            Subject: 'Explosion of Betelgeuse Star',
            StartTime: new Date(2023, 0, 8, 9, 30),
            EndTime: new Date(2023, 0, 8, 11, 0),
            Location: 'Chennai',
            OwnerId: 1
        }, {
            Id: 2,
            Subject: 'Thule Air Crash Report',
            StartTime: new Date(2023, 0, 10, 12, 0),
            EndTime: new Date(2023, 0, 10, 14, 0),
            Location: 'Mumbai',
            OwnerId: 2
        }, {
            Id: 3,
            Subject: 'Blue Moon Eclipse',
            StartTime: new Date(2023, 0, 13, 9, 30),
            EndTime: new Date(2023, 0, 13, 11, 0),
            Location: 'Mumbai',
            OwnerId: 3
        }
    ];
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '550px',
        selectedDate: new Date(2023, 0, 10),
        views: ['Week'],
        eventSettings: { dataSource: data },
        actionBegin: function (args) {
            if (args.requestType === 'toolbarItemRendering') {
                var exportItem = {
                    align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-excel-export',
                    text: 'CSV-Export', cssClass: 'e-excel-export', click: onExportClick
                };
                args.items.push(exportItem);
            }
        }
    });
    scheduleObj.appendTo('#Schedule');
    function onExportClick() {
        var exportValues = { exportType: 'csv', separator: ';' };
        scheduleObj.exportToExcel(exportValues);
    }

