let instance = new ej.base.Internationalization();
window.getDate = date => {
  return instance.formatDate(date, { skeleton: "Ed" });
};
let scheduleObj = new ej.schedule.Schedule({
  width: "100%",
  height: "550px",
  views: ["Month"],
  cssClass: "schedule-cell-header-template",
  cellHeaderTemplate:
    '<div class="cell-header-wrap">${getDate(data.date)}</div>'
});
scheduleObj.appendTo("#Schedule");

