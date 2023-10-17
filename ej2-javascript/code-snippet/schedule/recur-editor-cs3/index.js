var outputElement = document.querySelector('#rule-output');
var labelElement = document.querySelector('#rule-label');
var recObject = new ej.schedule.RecurrenceEditor({
  change: OnRecurrenceChange,
});
recObject.appendTo('#RecurrenceEditor');
labelElement.innerText = 'Date Collections';
outputElement.innerHTML = '';

function OnRecurrenceChange(args) {
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
