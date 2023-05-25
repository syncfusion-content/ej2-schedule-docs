var dataManager = new ej.data.DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    adaptor: new ej.data.ODataV4Adaptor(),
    crossDomain: true
});
var dataQuery = new ej.data.Query().from("Events").addParams('readOnly', 'true')
var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2017, 5, 11),
    readonly: true,
    eventSettings: { dataSource: dataManager, query: dataQuery }
});
 scheduleObj.appendTo('#Schedule');

