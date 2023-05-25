var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    currentView: 'Week',
    views: ['Week', 'Month', 'TimelineWeek', 'TimelineMonth', 'Agenda'],
    selectedDate: new Date(2018, 3, 1),
    resources: [{
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

