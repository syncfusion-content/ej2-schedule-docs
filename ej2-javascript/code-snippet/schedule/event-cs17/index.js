var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: scheduleData },
    dragStart: function (args) {
        args.scroll = { enable: true, scrollBy: 5 };
    }
});
scheduleObj.appendTo('#Schedule');

