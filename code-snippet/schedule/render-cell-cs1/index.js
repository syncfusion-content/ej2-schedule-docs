window.getWeather = function (value) {
    switch (value.getDay()) {
        case 0:
            return '<div class="weather-text">25°C</div>';
        case 1:
            return '<div class="weather-text">18°C</div>';
        case 2:
            return '<div class="weather-text">10°C</div>';
        case 3:
            return '<div class="weather-text">16°C</div>';
        case 4:
            return '<div class="weather-text">8°C</div>';
        case 5:
            return '<div class="weather-text">27°C</div>';
        case 6:
            return '<div class="weather-text">17°C</div>';
        default:
            return null;
    }
};

var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    views: ['Month'],
    selectedDate: new Date(2018, 1, 15),
    renderCell: function (args) {
        if (args.elementType === 'monthCells' && this.currentView === 'Month') {
            var ele = document.createElement('div');
            ele.innerHTML = getWeather(args.date);
            (args.element).appendChild(ele.firstChild);
        }
    },
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

