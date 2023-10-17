import { createElement } from '@syncfusion/ej2-base';
import { RecurrenceEditor, RecurrenceEditorChangeEventArgs } from '@syncfusion/ej2-schedule';

let outputElement: HTMLElement = <HTMLElement>document.querySelector('#rule-output');
let labelElement: HTMLElement = <HTMLElement>document.querySelector('#rule-label');
let recObject: RecurrenceEditor = new RecurrenceEditor({
  change: OnRecurrenceChange,
});
recObject.appendTo('#RecurrenceEditor');
let ruleString: string = 'FREQ=DAILY;INTERVAL=1';
recObject.setRecurrenceRule(ruleString);
labelElement.innerText = 'Date Collections';
outputElement.innerHTML = '';
let ruleStringDates: number[] = recObject.getRecurrenceDates(
  new Date(),
  ruleString
);
for (let index: number = 0; index < ruleStringDates.length; index++) {
  outputElement.appendChild(
    createElement('div', {
      innerHTML: new Date(ruleStringDates[index]).toString(),
    })
  );
}

function OnRecurrenceChange(args: RecurrenceEditorChangeEventArgs): void {
  if (args.value == '') {
    outputElement.innerText = 'Select Rule';
  } else {
    outputElement.innerHTML = '';
    let dates: number[] = recObject.getRecurrenceDates(new Date(), args.value);
    for (let index: number = 0; index < dates.length; index++) {
      outputElement.appendChild(
        createElement('div', { innerHTML: new Date(dates[index]).toString() })
      );
    }
  }
}
