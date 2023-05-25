var outputElement = document.querySelector('#rule-output');
var labelElement = document.querySelector('#rule-label');
var recObject = new ej.schedule.RecurrenceEditor();
var dates = recObject.getRecurrenceDates(new Date(2018, 0, 7, 10, 0), 'FREQ=DAILY;INTERVAL=1; COUNT=30', '20180108T114224Z,20180110T114224Z', 10, new Date(2018, 0, 7));
labelElement.innerText = 'Date Collections';
outputElement.innerHTML = '';
for (var index = 0; index < dates.length; index++) {
    outputElement.appendChild(new ej.base.createElement('div', { innerHTML: new Date(dates[index]).toString() }));
}


