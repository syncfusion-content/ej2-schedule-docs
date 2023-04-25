

import { createElement, compile } from '@syncfusion/ej2-base';
import { Popup } from '@syncfusion/ej2-popups';
import { ItemModel } from '@syncfusion/ej2-navigations';
import { Schedule, Month, ActionEventArgs, ToolbarActionArgs } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Month);
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Month'],
    currentView: 'Month',
    actionBegin: (args: ActionEventArgs & ToolbarActionArgs) => {
        if (args.requestType === 'toolbarItemRendering') {
            let userIconItem: ItemModel = {
                align: 'Right', prefixIcon: 'user-icon', text: 'Nancy', cssClass: 'e-schedule-user-icon'
            };
            args.items.push(userIconItem);
        }
    },
    actionComplete: (args: ActionEventArgs) => {
        if (args.requestType === 'toolBarItemRendered') {
            let userIconEle: HTMLElement = scheduleObj.element.querySelector('.e-schedule-user-icon') as HTMLElement;
            userIconEle.onclick = () => {
                profilePopup.relateTo = userIconEle;
                profilePopup.dataBind();
                if (profilePopup.element.classList.contains('e-popup-close')) {
                    profilePopup.show();
                } else {
                    profilePopup.hide();
                }
            };
        }
    }
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

let userContentEle: HTMLElement = createElement('div', {
        className: 'e-profile-wrapper'
    });
    scheduleObj.element.parentElement.appendChild(userContentEle);

    let userIconEle: HTMLElement = scheduleObj.element.querySelector('.e-schedule-user-icon') as HTMLElement;
    let getDOMString: (data: object) => HTMLCollection = compile('<div class="profile-container"><div class="profile-image">' +
        '</div><div class="content-wrap"><div class="name">Nancy</div>' +
        '<div class="destination">Product Manager</div><div class="status">' +
        '<div class="status-icon"></div>Online</div></div></div>');
    let output: HTMLCollection = getDOMString({});
    let profilePopup: Popup = new Popup(userContentEle, {
        content: output[0] as HTMLElement,
        relateTo: userIconEle,
        position: { X: 'left', Y: 'bottom' },
        collision: { X: 'flip', Y: 'flip' },
        targetType: 'relative',
        viewPortElement: scheduleObj.element,
        width: 185,
        height: 80
    });
    profilePopup.hide();


