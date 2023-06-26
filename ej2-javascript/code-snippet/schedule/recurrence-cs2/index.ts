import { RecurrenceEditor} from '@syncfusion/ej2-schedule';
let recObject: RecurrenceEditor = new RecurrenceEditor({
    frequencies: ['daily', 'weekly'],
    endTypes: ['until', 'count']
    
});
recObject.appendTo('#RecurrenceEditor');


