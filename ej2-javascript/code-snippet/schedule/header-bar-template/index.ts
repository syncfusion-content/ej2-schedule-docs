

import { createElement, compile } from '@syncfusion/ej2-base';
import { Popup } from '@syncfusion/ej2-popups';
import { Schedule, Month } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Month);

const onIconClick = (): void => {
    if (profilePopup.element.classList.contains('e-popup-close')) {
        profilePopup.show();
    } else {
        profilePopup.hide();
    }
}

let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Month'],
    currentView: 'Month',
    toolbarItems: [{ name: 'Previous', align: 'Left' }, { name: 'Next', align: 'Left' }, { name: 'DateRangeText', align: 'Left' }, { name: 'Today', align: 'Right' }, { align: 'Right', prefixIcon: 'user-icon', text: 'Nancy', cssClass: 'e-schedule-user-icon', click: onIconClick }],
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