var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: [
      {
        option: 'Day',
        interval: 3,
        displayName: '3 Days',
      },
      {
        option: 'Week',
        displayName: '2 Weeks',
        interval: 2,
        isSelected: true,
      },
    ],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


