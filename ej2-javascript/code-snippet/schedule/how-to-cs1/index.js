var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Day', 'Week', 'TimelineWorkWeek', 'Month', 'Agenda'],
    renderCell: function(args) {
        if(args.elementType === "dateHeader" || args.elementType === "monthCells") {
            ej.base.removeClass(args.element.childNodes, "e-navigate");
    }
    },
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

