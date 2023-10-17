var outputElement = document.querySelector('#rule-output');
var labelElement = document.querySelector('#rule-label');
var recObject = new ej.schedule.RecurrenceEditor({
  change: OnRecurrenceChange,
});
recObject.appendTo('#RecurrenceEditor');
var ruleString = 'FREQ=DAILY;INTERVAL=1';
recObject.setRecurrenceRule(ruleString);
labelElement.innerText = 'Date Collections';
outputElement.innerHTML = '';
var ruleStringDates = recObject.getRecurrenceDates(new Date(), ruleString);
for (var index = 0; index < ruleStringDates.length; index++) {
  outputElement.appendChild(
    new ej.base.createElement('div', {
      innerHTML: new Date(ruleStringDates[index]).toString(),
    })
  );
}

function OnRecurrenceChange(args) {
  if (args.value == '') {
    outputElement.innerText = 'Select Rule';
  } else {
    outputElement.innerHTML = '';
    let dates = recObject.getRecurrenceDates(new Date(), args.value);
    for (var index = 0; index < dates.length; index++) {
      outputElement.appendChild(
        new ej.base.createElement('div', {
          innerHTML: new Date(dates[index]).toString(),
        })
      );
    }
  }
}
