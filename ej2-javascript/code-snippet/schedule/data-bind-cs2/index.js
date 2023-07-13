var dataManager = new ej.data.DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
    adaptor: new ej.data.ODataV4Adaptor(),
    crossDomain: true
});
var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(1996, 6, 9),
    eventSettings: { dataSource: dataManager,
        fields: {
            id: 'Id',
            subject: { name: 'ShipName' },
            location: { name: 'ShipCountry' },
            description: { name: 'ShipAddress' },
            startTime: { name: 'OrderDate' },
            endTime: { name: 'RequiredDate' },
            recurrenceRule: { name: 'ShipRegion' }
        } },
    readonly: true
});
 scheduleObj.appendTo('#Schedule');

