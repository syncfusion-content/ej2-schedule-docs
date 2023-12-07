var dataManager = new ej.data.DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
    adaptor: new ej.data.ODataV4Adaptor(),
    crossDomain: true
});
var dataQuery = new ej.data.Query().addParams('readOnly', 'true')
var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(1996, 6, 9),
    readonly: true,
    eventSettings: { dataSource: dataManager, query: dataQuery,
        fields: {
            id: 'Id',
            subject: { name: 'ShipName' },
            location: { name: 'ShipCountry' },
            description: { name: 'ShipAddress' },
            startTime: { name: 'OrderDate' },
            endTime: { name: 'RequiredDate' },
            recurrenceRule: { name: 'ShipRegion' }
        } 
    }
});
 scheduleObj.appendTo('#Schedule');

