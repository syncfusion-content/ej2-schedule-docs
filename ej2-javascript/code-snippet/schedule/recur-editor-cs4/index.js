var numericValue = 10;
var numeric = new ej.inputs.NumericTextBox({
  value: numericValue,
  change: numericFocus,
});
numeric.appendTo('#numeric');
var outputElement = document.querySelector('#rule-output');
var labelElement = document.querySelector('#rule-label');
var ruleString = 'FREQ=DAILY;INTERVAL=1; COUNT=30';
var recObject = new ej.schedule.RecurrenceEditor();
var dates = recObject.getRecurrenceDates(new Date(2018, 0, 7, 10, 0), ruleString, '20180108T114224Z,20180110T114224Z', numericValue, new Date(2018, 0, 7));
labelElement.innerText = 'Date Collections';
outputElement.innerHTML = '';
for (var index = 0; index < dates.length; index++) {
    outputElement.appendChild(new ej.base.createElement('div', { innerHTML: new Date(dates[index]).toString() }));
}

function numericFocus(args) {
    outputElement.innerHTML = '';
    var dates = recObject.getRecurrenceDates(
        new Date(2018, 0, 7, 10, 0),
        ruleString,
        '20180108T114224Z,20180110T114224Z',
        args.value,
        new Date(2018, 0, 7)
    );
    for (var index = 0; index < dates.length; index++) {
        outputElement.appendChild(
            ej.base.createElement('div', {
                innerHTML: new Date(dates[index]).toString(),
            })
        );
    }
}
