var ownerCollections = [
    { OwnerText: 'Margaret', OwnerId: 1, Color: '#ea7a57' },
    { OwnerText: 'Robert', OwnerId: 2, Color: '#df5286' },
    { OwnerText: 'Laura', OwnerId: 3, Color: '#865fcf' }
];

var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2023, 10, 15),
    views: ['Month'],
    currentView: 'Month',
    resources: [{
        field: 'OwnerId', title: 'Owners',
        name: 'Owners', allowMultiple: true,
        dataSource: ownerCollections,
        textField: 'OwnerText', idField: 'OwnerId', colorField: 'Color', query: new ej.data.Query().where('OwnerId', 'equal', 1)
    }],
    toolbarItems: [{ name: 'Previous', align: 'Left' }, { name: 'Next', align: 'Left' }, { name: 'DateRangeText', align: 'Left' },
    {
        type: 'Input', align: 'Center', template: new ej.dropdowns.DropDownList({
            value: 1, showClearButton: false, width: 125,
            fields: { text: 'OwnerText', value: 'OwnerId' },
            dataSource: ownerCollections,
            change: onChange
        })
    }, { name: 'Today', align: 'Right' }],
    eventSettings: { dataSource: scheduleData, query: new ej.data.Query().where('OwnerId', 'equal', 1) }
});
scheduleObj.appendTo('#Schedule');


function onChange(args) {
    var value = args.value;
    var resourcePredicate;
    resourcePredicate = new ej.data.Predicate('OwnerId', 'equal', value);
    scheduleObj.resources[0].query = resourcePredicate ? new ej.data.Query().where(resourcePredicate) :
        new ej.data.Query().where('OwnerId', 'equal', 1);
    scheduleObj.eventSettings.query = new ej.data.Query().where('OwnerId', 'equal', value);
}
