var resourceData = generateResourceData(1, 1000, 'Resource');
var dataManager = new ej.data.DataManager({
    url: 'https://services.syncfusion.com/js/production/api/VirtualEventData',
    adaptor: new ej.data.WebApiAdaptor,
    crossDomain: true
});

var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    width: '100%',
    currentView: 'TimelineMonth',
    views: [{
        option: 'TimelineMonth',
        enableLazyLoading: true
    }],
    group: {
        resources: ['Resources']
    },
    resources: [{
        field: 'ResourceId',
        title: 'Resource',
        name: 'Resources',
        dataSource: resourceData,
        textField: 'Text',
        idField: 'Id',
        colorField: 'Color'
    }],
    selectedDate: new Date(2023, 3, 1),
    eventSettings: {
        dataSource: dataManager
    }
});
scheduleObj.appendTo('#Schedule');

function generateResourceData(startId, endId, text) {
    var data = [];
    var colors = [
        '#ff8787', '#9775fa', '#748ffc', '#3bc9db', '#69db7c',
        '#fdd835', '#748ffc', '#9775fa', '#df5286', '#7fa900',
        '#fec200', '#5978ee', '#00bdae', '#ea80fc'
    ];
    for (var a = startId; a <= endId; a++) {
        var n = Math.floor(Math.random() * colors.length);
        data.push({
            Id: a,
            Text: text + ' ' + a,
            Color: colors[n]
        });
    }
    return data;
}

