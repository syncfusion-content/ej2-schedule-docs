var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 5, 5),
    views: ['Week', 'Month', 'TimelineWeek', 'TimelineMonth', 'Agenda'],
    currentView: 'Week',
    group: {
        allowGroupEdit: true,
        resources: ['Conferences']
    },
    resources: [{
        field: 'ConferenceId', title: 'Conference',
        name: 'Conferences', allowMultiple: true,
        dataSource: [
            { Text: 'Margaret', Id: 1, Color: '#1aaa55' },
            { Text: 'Robert', Id: 2, Color: '#357cd2' },
            { Text: 'Laura', Id: 3, Color: '#7fa900' }
        ],
            textField: 'Text', idField: 'Id', colorField: 'Color'
    }],
    eventSettings: { dataSource: resourceConferenceData }
});
scheduleObj.appendTo('#Schedule');

