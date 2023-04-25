var scheduleObj = new ej.schedule.Schedule({
  height: "600px",
  width: "100%",
  selectedDate: new Date(2020, 2, 12),
  currentView: "TimelineWeek",
  views: ["TimelineDay", "TimelineWeek", "TimelineMonth"],
  timeScale: {
    enable: true,
    interval: 60,
    slotCount: 2
  },
  navigating: function (args) {
    if (args.currentView != "TimelineMonth") {
      this.headerRows = [];
    }
  },
  eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo("#Schedule");

var schObj = document.querySelector('.e-schedule').ej2_instances[0];
window.addEventListener("wheel", event => {
  const delta = Math.sign(event.deltaY);
  if (schObj.currentView === "TimelineMonth") {
    var len = schObj.headerRows.length;
    if (delta < 0) {
      if (len == 0) {
        schObj.setProperties({
          headerRows: [{ option: "Date" }]
        });
      } else if (len == 1) {
        schObj.setProperties({
          headerRows: [{ option: "Week" }, { option: "Date" }]
        });
      } else if (len == 2) {
        schObj.setProperties({
          headerRows: [
            { option: "Month" },
            { option: "Week" },
            { option: "Date" }
          ]
        });
      } else if (len == 3) {
        schObj.setProperties({
          headerRows: [
            { option: "Year" },
            { option: "Month" },
            { option: "Week" },
            { option: "Date" }
          ]
        });
      }
    } else if (delta > 0) {
      if (len == 2) {
        schObj.setProperties({
          headerRows: [{ option: "Date" }]
        });
      } else if (len == 3) {
        schObj.setProperties({
          headerRows: [{ option: "Week" }, { option: "Date" }]
        });
      } else if (len == 4) {
        schObj.setProperties({
          headerRows: [
            { option: "Month" },
            { option: "Week" },
            { option: "Date" }
          ]
        });
      } else if (len == 5) {
        schObj.setProperties({
          headerRows: [
            { option: "Year" },
            { option: "Month" },
            { option: "Week" },
            { option: "Date" }
          ]
        });
      }
    }
  } else {
    if (delta > 0 && schObj.timeScale.slotCount > 1) {
      schObj.timeScale.slotCount -= 1;
    } else if (delta < 0 && schObj.timeScale.slotCount <= 8) {
      schObj.timeScale.slotCount += 1;
    }
  }
});

