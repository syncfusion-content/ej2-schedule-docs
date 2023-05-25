    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '550px',
        selectedDate: new Date(2023, 2, 5),
        currentView: 'Month',
        views: ['Day', 'Week', 'WorkWeek', 'Month'],
        eventSettings: {
            dataSource: [{
                    Id: 1,
                    Subject: 'Review Meeting',
                    StartTime: new Date(2023, 2, 5, 20, 0, 0),
                    EndTime: new Date(2023, 2, 5, 21, 0, 0)
                }]
        }
    });
    scheduleObj.appendTo('#Schedule');
    var btnElement = ej.base.createElement("Button", { id: 'openCellClickInfo' });
    document.getElementById('button').appendChild(btnElement);
    btnElement.textContent = "Show Cell QuickInfo Popup";
    btnElement.onclick = function () {
        scheduleObj.openQuickInfoPopup({
            Subject: 'Meeting',
            StartTime: new Date(2023, 2, 6, 20, 0, 0),
            EndTime: new Date(2023, 2, 6, 21, 0, 0)
        });
    };
    var eventButton = ej.base.createElement("Button", { id: 'openeventClickInfo' });
    document.getElementById('button').appendChild(eventButton);
    eventButton.textContent = "Show Event QuickInfo Popup";
    eventButton.onclick = function () {
        scheduleObj.openQuickInfoPopup({
            Id: 1,
            Subject: 'Review Meeting',
            StartTime: new Date(2023, 2, 5, 20, 0, 0),
            EndTime: new Date(2023, 2, 5, 21, 0, 0)
        });
    };



