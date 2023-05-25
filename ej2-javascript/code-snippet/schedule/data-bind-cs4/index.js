class CustomAdaptor extends ej.data.ODataV4Adaptor {
    processResponse() {
        var i = 0;
        // calling base class processResponse function
        var original = super.processResponse.apply(this, arguments);
        // adding employee id
        original.forEach( function (item) { item['EmpID'] = ++i});
        return  original;
    }
}
var dataManager = new ej.data.DataManager({
    url: 'https://ej2services.syncfusion.com/production/web-services/api/Schedule',
    adaptor: new CustomAdaptor
});
var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2020, 9, 20),
    readonly: true,
    eventSettings: { dataSource: dataManager }
});
 scheduleObj.appendTo('#Schedule');

