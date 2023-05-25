var outputElement = document.querySelector('#rule-output');
var recObject = new ej.schedule.RecurrenceEditor({
    change: function (args) {
        if(args.value == "") {
            outputElement.innerText = 'Select Rule';
        } else {
            outputElement.innerText = args.value;
        }
    }
});
recObject.appendTo('#RecurrenceEditor');
outputElement.innerText = 'Select Rule';

