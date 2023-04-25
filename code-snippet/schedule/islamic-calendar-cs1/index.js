ej.base.setCulture('ar');
loadCultureFiles();
var localTexts;
var ajax = new ej.base.Ajax('./locale.json', 'GET', false);
ajax.onSuccess = function(value) {
    localTexts = value;
};
ajax.send();
ej.base.L10n.load(JSON.parse(localTexts));
var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '550px',
        views: ['Day', 'Week', 'WorkWeek', 'Month'],
        selectedDate: new Date(2018, 1, 15),
        eventSettings: { dataSource: scheduleData }
    });
function loadCultureFiles() {
        var files = ['ca-gregorian.json', 'numbers.json', 'numberingSystems.json', 'timeZoneNames.json', 'ca-islamic.json'];
        var loader = ej.base.loadCldr;
        var loadCulture = function (prop) {
            var val, ajax;
            ajax = new ej.base.Ajax('./' + files[prop], 'GET', false);
            ajax.onSuccess = function (value) {
                val = value;
            };
            ajax.send();
            loader(JSON.parse(val));
        };
        for (var prop = 0; prop < files.length; prop++) {
            loadCulture(prop);
        }
    }
scheduleObj.appendTo('#Schedule');

