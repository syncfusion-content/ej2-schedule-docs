var data = [{
    TravelId: 2,
    TravelSummary: 'Paris',
    DepartureTime: new Date(2018, 1, 15, 10, 0),
    ArrivalTime: new Date(2018, 1, 15, 12, 30),
    Source: 'London',
    Comments: 'Summer vacation planned for outstation.'
}];

var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: data,
        fields: {
            id: 'TravelId',
            subject: { name: 'TravelSummary', title: 'Summary', default: 'Add Summary' },
            location: { name: 'Source', default: 'USA' },
            description: { name: 'Comments' },
            startTime: { name: 'DepartureTime' },
            endTime: { name: 'ArrivalTime' }
        }
    }
});
scheduleObj.appendTo('#Schedule');

