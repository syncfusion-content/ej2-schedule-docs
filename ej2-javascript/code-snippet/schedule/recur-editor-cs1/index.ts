

import { RecurrenceEditor, RecurrenceEditorChangeEventArgs } from '@syncfusion/ej2-schedule';

let outputElement: HTMLElement = <HTMLElement>document.querySelector('#rule-output');
let recObject: RecurrenceEditor = new RecurrenceEditor({
    change: (args: RecurrenceEditorChangeEventArgs) => {
        if(args.value == "") {
            outputElement.innerText = 'Select Rule';
        } else {
            outputElement.innerText = args.value;
        }
    }
});
recObject.appendTo('#RecurrenceEditor');
outputElement.innerText = 'Select Rule';


