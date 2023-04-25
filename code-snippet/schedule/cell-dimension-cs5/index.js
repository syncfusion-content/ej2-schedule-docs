var scheduleObj= new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 14),
    currentView: 'Month',
    views: ['Day','Week', 'Month'],
    renderCell: function(args) {
        if (args.elementType == 'workCells' || args.elementType == 'monthCells') {
            var weekEnds = [0, 6];
            if (weekEnds.indexOf((args.date).getDay()) >= 0) {
                var ele = ej.base.createElement('div', {
                    innerHTML: "<img src='https://ej2.syncfusion.com/demos/src/schedule/images/newyear.svg' />",
                    className: 'templatewrap'
                });
                (args.element).appendChild(ele);
            }
        }
    },
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

