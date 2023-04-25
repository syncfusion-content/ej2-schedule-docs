var scheduleObj = new ej.schedule.Schedule({
    width: '100%', height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'],
    eventSettings: {
        dataSource: scheduleData,
        fields: {
            id: 'Id',
            subject: { name: 'Subject', title: 'Event Name' },
            location: { name: 'Location', title: 'Event Location'},
            description: { name: 'Description', title: 'Event Description' },
            startTime: { name: 'StartTime', title: 'Start Duration' },
            endTime: { name: 'EndTime', title: 'End Duration'  }
        }
    }
});
scheduleObj.appendTo('#Schedule');

