var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: scheduleData },
    eventRendered: applyCategoryColor
});
scheduleObj.appendTo('#Schedule');
function applyCategoryColor(args, currentView) {
    var categoryColor = args.data.CategoryColor;
    if (!args.element || !categoryColor) {
        return;
    }
    if (currentView === 'Agenda') {
        (args.element.firstChild).style.borderLeftColor = categoryColor;
    } else {
        args.element.style.backgroundColor = categoryColor;
    }
}

