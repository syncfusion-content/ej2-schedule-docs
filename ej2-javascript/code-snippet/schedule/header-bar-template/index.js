var onIconClick = function () {
    if (profilePopup.element.classList.contains('e-popup-close')) {
        profilePopup.show();
    } else {
        profilePopup.hide();
    }
};

var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Month'],
    currentView: 'Month',
    toolbarItems: [{ name: 'Previous', align: 'Left' }, { name: 'Next', align: 'Left' }, { name: 'DateRangeText', align: 'Left' }, { name: 'Today', align: 'Right' }, { align: 'Right', prefixIcon: 'user-icon', text: 'Nancy', cssClass: 'e-schedule-user-icon', click: onIconClick }],
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');

var userContentEle = new ej.base.createElement('div', {
    className: 'e-profile-wrapper'
});
scheduleObj.element.parentElement.appendChild(userContentEle);

var userIconEle = scheduleObj.element.querySelector('.e-schedule-user-icon');
var getDOMString = new ej.base.compile('<div class="profile-container"><div class="profile-image">' +
    '</div><div class="content-wrap"><div class="name">Nancy</div>' +
    '<div class="destination">Product Manager</div><div class="status">' +
    '<div class="status-icon"></div>Online</div></div></div>');
var output = getDOMString({});
var profilePopup = new ej.popups.Popup(userContentEle, {
    content: output[0],
    relateTo: userIconEle,
    position: { X: 'left', Y: 'bottom' },
    collision: { X: 'flip', Y: 'flip' },
    targetType: 'relative',
    viewPortElement: scheduleObj.element,
    width: 185,
    height: 80
});
profilePopup.hide();

