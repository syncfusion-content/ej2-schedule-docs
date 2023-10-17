

import { createElement } from '@syncfusion/ej2-base';
import { RecurrenceEditor } from '@syncfusion/ej2-schedule';
import { NumericTextBox, ChangeEventArgs } from '@syncfusion/ej2-inputs';

let numericValue: number = 10;
let numeric: NumericTextBox = new NumericTextBox({
  value: numericValue,
  change: numericFocus,
});
numeric.appendTo('#numeric');
let outputElement: HTMLElement = <HTMLElement>document.querySelector('#rule-output');
let labelElement: HTMLElement = <HTMLElement>document.querySelector('#rule-label');
let ruleString: string = 'FREQ=DAILY;INTERVAL=1; COUNT=30';
let recObject: RecurrenceEditor = new RecurrenceEditor();
let dates: number[] = recObject.getRecurrenceDates(new Date(2018, 0, 7, 10, 0), ruleString, '20180108T114224Z,20180110T114224Z', numericValue, new Date(2018, 0, 7));
labelElement.innerText = 'Date Collections';
outputElement.innerHTML = '';
for (let index: number = 0; index < dates.length; index++) {
  outputElement.appendChild(createElement('div', { innerHTML: new Date(dates[index]).toString() }));
}

function numericFocus(args: ChangeEventArgs): void {
  outputElement.innerHTML = '';
  let dates: number[] = recObject.getRecurrenceDates(
    new Date(2018, 0, 7, 10, 0),
    ruleString,
    '20180108T114224Z,20180110T114224Z',
    args.value,
    new Date(2018, 0, 7)
  );
  for (let index: number = 0; index < dates.length; index++) {
    outputElement.appendChild(
      createElement('div', { innerHTML: new Date(dates[index]).toString() })
    );
  }
}
