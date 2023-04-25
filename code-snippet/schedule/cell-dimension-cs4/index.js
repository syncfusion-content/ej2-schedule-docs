window.getMonthCellText = function (date) {
  if (date.getMonth() === 10 && date.getDate() === 23) {
    return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/birthday.svg" />';
  } else if (date.getMonth() === 11 && date.getDate() === 9) {
    return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/get-together.svg" />';
  } else if (date.getMonth() === 11 && date.getDate() === 13) {
    return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/birthday.svg" />';
  } else if (date.getMonth() === 11 && date.getDate() === 22) {
    return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/thanksgiving-day.svg" />';
  } else if (date.getMonth() === 11 && date.getDate() === 24) {
    return '<img src="https://ej2.syncfusion.com/demos/src/schedule/images/christmas-eve.svg" />';
  } else if (date.getMonth() === 11 && date.getDate() === 25) {
    return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/christmas.svg" />';
  } else if (date.getMonth() === 0 && date.getDate() === 1) {
    return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/newyear.svg" />';
  } else if (date.getMonth() === 0 && date.getDate() === 14) {
    return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/birthday.svg" />';
  }
  return '';
};
window.getWorkCellText = function (date) {
  var weekEnds = [0, 6];
  if (weekEnds.indexOf(date.getDay()) >= 0) {
    return "<img src='https://ej2.syncfusion.com/demos/src/schedule/images/newyear.svg' />";
  }
  return '';
};

var scheduleObj = new ej.schedule.Schedule({
  width: '100%',
  height: '550px',
  views: ['Day', 'Week', 'TimelineWeek', 'Month'],
  cssClass: 'schedule-cell-template',
  cellTemplate: '${if(type === "workCells")}<div class="templatewrap">${getWorkCellText(data.date)}</div>${/if}${if(type === "monthCells")}<div class="templatewrap">${getMonthCellText(data.date)}</div>${/if}',
  selectedDate: new Date(2017, 11, 16)
});
scheduleObj.appendTo('#Schedule');

