var data = [{
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    StartTime: new Date(2020, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 15, 12, 30),
    IsAllDay: false
}, {
    Id: 2,
    Subject: 'Blue Moon Eclipse',
    StartTime: new Date(2020, 1, 16, 12, 0),
    EndTime: new Date(2018, 1, 16, 13, 0),
    IsAllDay: false
}];
var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2020, 1, 15),
    views: ['Day', 'Week', 'Month', 'Agenda'],
    eventSettings: { dataSource: data },
    timezoneDataSource: [
        { Value: 'Pacific/Niue', Text: 'Niue' },
        { Value: 'Pacific/Pago_Pago', Text: 'Pago Pago' },
        { Value: 'Pacific/Honolulu', Text: 'Hawaii Time' },
        { Value: 'Pacific/Rarotonga', Text: 'Rarotonga' },
        { Value: 'Pacific/Tahiti', Text: 'Tahiti' }
    ]
});
scheduleObj.appendTo('#Schedule');

