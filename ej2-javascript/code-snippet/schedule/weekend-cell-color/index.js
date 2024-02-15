var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 14),
    currentView: 'Month',
    views: ['Day', 'Week', 'Month'],
    cssClass: 'schedule-cell-customization',
    renderCell: function (args) {
        if (args.elementType == "workCells") {
            // To change the color of weekend columns in week view
            if (args.date) {
                if (args.date.getDay() === 6) {
                    (args.element).style.background = '#ffdea2';
                }
                if (args.date.getDay() === 0) {
                    (args.element).style.background = '#ffdea2';
                }
            }
        }
    },
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

