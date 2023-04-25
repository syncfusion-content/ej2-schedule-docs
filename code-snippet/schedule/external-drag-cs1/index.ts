

import { Schedule, Month, Resize, DragAndDrop, CellClickEventArgs } from '@syncfusion/ej2-schedule';
import { ActionEventArgs } from '@syncfusion/ej2-schedule';
import  { eventData, waitingList }from './datasource.ts';
import { DragAndDropEventArgs, TreeView } from '@syncfusion/ej2-navigations';
import { closest, remove, addClass } from '@syncfusion/ej2-base';

Schedule.Inject(Month, Resize, DragAndDrop);
let scheduleObj: Schedule = new Schedule({
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

let treeObj: TreeView = new TreeView({
    fields: { dataSource: waitingList , id: 'Id', text: 'Name' },
    allowDragAndDrop: true,
    nodeDragStop: onTreeDragStop,
    nodeDragging: onItemDrag,
    cssClass: 'treeview-external-drag'
});
treeObj.appendTo('#Tree');

let isTreeItemDropped: boolean = false;
let draggedItemId: string = '';

function onItemDrag(event: any): void {
    if (scheduleObj.isAdaptive) {
        let classElement: HTMLElement = scheduleObj.element.querySelector('.e-device-hover');
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
        let dragElementIcon: NodeListOf<HTMLElement> =
            document.querySelectorAll('.e-drag-item.treeview-external-drag .e-icon-expandable');
        for (let i: number = 0; i < dragElementIcon.length; i++) {
            dragElementIcon[i].style.display = 'none';
        }
    }
}

function onActionBegin(event: ActionEventArgs): void {
    if (event.requestType === 'eventCreate' && isTreeItemDropped) {
        let treeViewdata: { [key: string]: Object }[] = treeObj.fields.dataSource as { [key: string]: Object }[];
        const filteredPeople: { [key: string]: Object }[] =
            treeViewdata.filter((item: any) => item.Id !== parseInt(draggedItemId, 10));
        treeObj.fields.dataSource = filteredPeople;
        let elements: NodeListOf<HTMLElement> = document.querySelectorAll('.e-drag-item.treeview-external-drag');
        for (let i: number = 0; i < elements.length; i++) {
            remove(elements[i]);
        }
    }
}

function onTreeDragStop(event: DragAndDropEventArgs): void {
    let treeElement: Element = <Element>closest(event.target, '.e-treeview');
    let classElement: HTMLElement = scheduleObj.element.querySelector('.e-device-hover');
    if (classElement) {
        classElement.classList.remove('e-device-hover');
    }
    if (!treeElement) {
        event.cancel = true;
        let scheduleElement: Element = <Element>closest(event.target, '.e-content-wrap') ||
            <Element>closest(event.target, '.e-all-day-row');
        if (scheduleElement) {
            let treeviewData: { [key: string]: Object }[] =
                treeObj.fields.dataSource as { [key: string]: Object }[];
            if (event.target.classList.contains('e-work-cells')) {
                const filteredData: { [key: string]: Object }[] =
                    treeviewData.filter((item: any) => item.Id === parseInt(event.draggedNodeData.id as string, 10));
                let cellData: CellClickEventArgs = scheduleObj.getCellDetails(event.target);
                let eventData: { [key: string]: Object } = {
                    Subject: filteredData[0].Name,
                    StartTime: cellData.startTime,
                    EndTime: cellData.endTime,
                    IsAllDay: cellData.isAllDay,
                    Description: filteredData[0].Description
                };
                scheduleObj.addEvent(eventData);
                isTreeItemDropped = true;
                draggedItemId = event.draggedNodeData.id as string;
            }
        }
    }
}


