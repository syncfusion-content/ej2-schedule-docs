var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: scheduleData },
    resizeStart: function (args) {
        args.scroll = { enable: true, scrollBy: 15 };
    }
});
scheduleObj.appendTo('#Schedule');

