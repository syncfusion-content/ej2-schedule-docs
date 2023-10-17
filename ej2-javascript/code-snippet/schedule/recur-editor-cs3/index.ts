import { createElement } from '@syncfusion/ej2-base';
import { RecurrenceEditor, RecurrenceEditorChangeEventArgs } from '@syncfusion/ej2-schedule';

let outputElement: HTMLElement = <HTMLElement>document.querySelector('#rule-output');
let labelElement: HTMLElement = <HTMLElement>document.querySelector('#rule-label');
let recObject: RecurrenceEditor = new RecurrenceEditor({
  change: OnRecurrenceChange,
});
recObject.appendTo('#RecurrenceEditor');
labelElement.innerText = 'Date Collections';
outputElement.innerHTML = '';

function OnRecurrenceChange(args: RecurrenceEditorChangeEventArgs): void {
  outputElement.innerHTML = '';
  let dates: number[] = recObject.getRecurrenceDates(new Date(), args.value);
  for (let index: number = 0; index < dates.length; index++) {
    outputElement.appendChild(
      createElement('div', { innerHTML: new Date(dates[index]).toString() })
    );
  }
}
