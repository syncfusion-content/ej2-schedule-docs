
var scheduleObj = new ej.schedule.Schedule({
  width: '100%',
  height: '550px',
  selectedDate: new Date(2018, 1, 15),
  eventSettings: { dataSource: scheduleData },
  eventRendered: function (args) {
    switch (args.data.EventType) {
      case 'Requested':
        args.element.style.backgroundColor = '#F57F17';
        break;
      case 'Confirmed':
        args.element.style.backgroundColor = '#7fa900';
        break;
      case 'New':
        args.element.style.backgroundColor = '#8e24aa';
        break;
    }
  }
});
scheduleObj.appendTo('#Schedule');

var confirm = new ej.buttons.CheckBox({ label: 'Confirmed', checked: true, change: onChange }, '#confirmed');
var request = new ej.buttons.CheckBox({ label: 'Requested', checked: true, change: onChange }, '#requested');
var fresh = new ej.buttons.CheckBox({ label: 'New', checked: true, change: onChange }, '#new');

function onChange() {
  var predicate;
  var checkBoxes = [confirm, request, fresh];
  checkBoxes.forEach(function (checkBoxObj) {
    if (checkBoxObj.checked) {
      if (predicate) {
        predicate = predicate.or('EventType', 'equal', checkBoxObj.label);
      } else {
        predicate = new ej.data.Predicate('EventType', 'equal', checkBoxObj.label);
      }
    }
  });
  scheduleObj.eventSettings.query = new ej.data.Query().where(predicate);
}


