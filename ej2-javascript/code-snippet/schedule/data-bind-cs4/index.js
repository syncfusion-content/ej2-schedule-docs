class CustomAdaptor extends ej.data.ODataV4Adaptor {
    processResponse() {
        var i = 0;
        // calling base class processResponse function
        var original = super.processResponse.apply(this, arguments);
        // adding employee id
        original.forEach(function (item) { item['EmpID'] = ++i });
        return original;
    }
}
var dataManager = new ej.data.DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
    adaptor: new CustomAdaptor
});
var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(1996, 6, 9),
    readonly: true,
    eventSettings: {
        dataSource: dataManager,
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

