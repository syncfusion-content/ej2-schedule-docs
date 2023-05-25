var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { 
        dataSource: scheduleData,
        fields: {
            subject: { title: 'Event Name', name: 'Subject', default: 'Add Name' },
            location: { title: 'Event Location', name: 'Location' },
            description: { title: 'Summary', name: 'Description' },
            startTime: { title: 'From', name: 'StartTime' },
            endTime: { title: 'To', name: 'EndTime' }
        }
     }
});
scheduleObj.appendTo('#Schedule');

