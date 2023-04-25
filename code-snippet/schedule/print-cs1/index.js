var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '520px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: scheduleData },
    actionBegin: (args) => {
        if (args.requestType === 'toolbarItemRendering') {
            let printItem = {
                align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-print',
                text: 'Print', cssClass: 'e-schedule-print', click: onPrintIconClick
            };
            args.items.push(printItem);
        }
    }
});
scheduleObj.appendTo('#Schedule');

function onPrintIconClick() {
    scheduleObj.print();
}

