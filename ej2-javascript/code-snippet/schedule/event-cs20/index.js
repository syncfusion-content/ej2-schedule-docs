var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: scheduleData },
    dragStop: function (args) {
        args.cancel = true; //cancels the drop action
        scheduleObj.openEditor(args.data, "Save"); //open the event window with updated start and end time
    }
});
scheduleObj.appendTo('#Schedule');

