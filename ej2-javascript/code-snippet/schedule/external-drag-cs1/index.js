var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    cssClass: 'schedule-drag-drop',
    views: [ 'Month' ],
    eventSettings: { dataSource: eventData },
    actionBegin: onActionBegin,
    drag: onItemDrag
});
scheduleObj.appendTo('#Schedule');
var treeObj = new ej.navigations.TreeView({
    fields: { dataSource: waitingList , id: 'Id', text: 'Name' },
    allowDragAndDrop: true,
    nodeDragStop: onTreeDragStop,
    nodeDragging: onItemDrag,
    cssClass: 'treeview-external-drag'
});
treeObj.appendTo('#Tree');

var isTreeItemDropped = false;
var draggedItemId = '';

function onItemDrag(event) {
    if (scheduleObj.isAdaptive) {
        var classElement = scheduleObj.element.querySelector('.e-device-hover');
        if (classElement) {
            classElement.classList.remove('e-device-hover');
        }
        if (event.target.classList.contains('e-work-cells')) {
            addClass([event.target], 'e-device-hover');
        }
    }
    if (document.body.style.cursor === 'not-allowed') {
        document.body.style.cursor = '';
    }
    if (event.name === 'nodeDragging') {
        var dragElementIcon =
            document.querySelectorAll('.e-drag-item.treeview-external-drag .e-icon-expandable');
        for (var i= 0; i < dragElementIcon.length; i++) {
            dragElementIcon[i].style.display = 'none';
        }
    }
}

function onActionBegin(event) {
    if (event.requestType === 'eventCreate' && isTreeItemDropped) {
        var treeViewdata = treeObj.fields.dataSource;
        var filteredPeople = treeViewdata.filter(function (item) { return item.Id !== parseInt(draggedItemId, 10); });
        treeObj.fields.dataSource = filteredPeople;
        var elements = document.querySelectorAll('.e-drag-item.treeview-external-drag');
        for (var i= 0; i < elements.length; i++) {
            remove(elements[i]);
        }
    }
}

function onTreeDragStop(event) {
    var treeElement = ej.base.closest(event.target, '.e-treeview');
    var classElement = scheduleObj.element.querySelector('.e-device-hover');
    if (classElement) {
        classElement.classList.remove('e-device-hover');
    }
    if (!treeElement) {
        event.cancel = true;
        var scheduleElement = ej.base.closest(event.target, '.e-content-wrap') ||
            ej.base.closest(event.target, '.e-all-day-row');
        if (scheduleElement) {
            var treeviewData = treeObj.fields.dataSource;
            if (event.target.classList.contains('e-work-cells')) {
                var filteredData = treeviewData.filter(function (item) { return item.Id === parseInt(event.draggedNodeData.id, 10); });
                var cellData = scheduleObj.getCellDetails(event.target);
                var eventData = {
                    Subject: filteredData[0].Name,
                    StartTime: cellData.startTime,
                    EndTime: cellData.endTime,
                    IsAllDay: cellData.isAllDay,
                    Description: filteredData[0].Description
                };
                scheduleObj.addEvent(eventData);
                isTreeItemDropped = true;
                draggedItemId = event.draggedNodeData.id;
            }
        }
    }
}

