var dataManager = new ej.data.DataManager({
    url: 'https://ej2services.syncfusion.com/production/web-services/api/Schedule',
    adaptor: new ej.data.ODataV4Adaptor(),
    crossDomain: true
});
var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2020, 9, 20),
    eventSettings: { dataSource: dataManager },
    readonly: true
});
 scheduleObj.appendTo('#Schedule');

