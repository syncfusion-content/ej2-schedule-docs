

import { createElement } from '@syncfusion/ej2-base';
import { RecurrenceEditor } from '@syncfusion/ej2-schedule';

let outputElement: HTMLElement = <HTMLElement>document.querySelector('#rule-output');
let labelElement: HTMLElement = <HTMLElement>document.querySelector('#rule-label');
let recObject: RecurrenceEditor = new RecurrenceEditor();
let dates: number[] = recObject.getRecurrenceDates(new Date(2018, 0, 7, 10, 0), 'FREQ=DAILY;INTERVAL=1', '20180108T114224Z,20180110T114224Z', 4, new Date(2018, 0, 7));
labelElement.innerText = 'Date Collections';
outputElement.innerHTML = '';
let dateCollection: string[] = [];
for (let index: number = 0; index < dates.length; index++) {
  outputElement.appendChild(createElement('div', { innerHTML: new Date(dates[index]).toString() }));
}


