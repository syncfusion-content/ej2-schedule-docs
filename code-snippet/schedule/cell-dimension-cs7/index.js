let scheduleObj = new ej.schedule.Schedule({
  width: "100%",
  height: "550px",
  views: ["Day", "Week", "Month", "Agenda", "Year"],
  selectedDate: new Date(2018, 1, 17),
  minDate: new Date(2017, 4, 17),
  maxDate: new Date(2018, 5, 17)
});
scheduleObj.appendTo("#Schedule");

