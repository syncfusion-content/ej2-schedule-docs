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
    var closeButton = ej.base.createElement("Button", { id: 'closeQuickInfo' });
    document.getElementById('button').appendChild(closeButton);
    closeButton.textContent = "Close Quick Info Popup";
    closeButton.onclick = function () {
        scheduleObj.closeQuickInfoPopup();
    };

