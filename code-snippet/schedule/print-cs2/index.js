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
  let printModel = {
    agendaDaysCount: 14,
    cssClass: 'e-print-schedule',
    currentView: scheduleObj.currentView,
    dateFormat: 'dd-MMM-yyyy',
    enableRtl: false,
    endHour: '18:00',
    firstDayOfWeek: 1,
    firstMonthOfYear: 0,
    group: {},
    height: 'auto',
    locale: scheduleObj.locale,
    maxDate: scheduleObj.selectedDate,
    minDate: scheduleObj.getCurrentViewDates()[0],
    readonly: true,
    resources: [],
    rowAutoHeight: false,
    selectedDate: new Date(),
    showHeaderBar: false,
    showTimeIndicator: false,
    showWeekNumber: false,
    showWeekend: false,
    startHour: '06:00',
    timeFormat: 'HH',
    timeScale: { enable: true },
    width: 'auto',
    workDays: [1, 2, 3, 4, 5],
    workHours: { highlight: true, start: '10:00', end: '20:00' }
  };
  scheduleObj.print(printModel);
}

