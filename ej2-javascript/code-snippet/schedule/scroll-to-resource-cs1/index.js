var scheduleObj = new ej.schedule.Schedule({
  width: '100%',
  height: '550px',
  views: ['Week', 'Month', 'TimelineWeek', 'TimelineMonth', 'Agenda'],
  selectedDate: new Date(2018, 3, 1),
  group: {
    resources: ['Owners']
  },
  resources: [
    {
      field: 'OwnerId', title: 'Owner',
      name: 'Owners', allowMultiple: true,
      dataSource: [
        { OwnerText: 'Jammy', Id: 1, OwnerColor: '#ffaa00' },
        { OwnerText: 'Steven', Id: 2, OwnerColor: '#f8a398' },
        { OwnerText: 'Tweety', Id: 3, OwnerColor: '#7499e1' },
        { OwnerText: 'Jammy', Id: 4, OwnerColor: '#ffaa00' },
        { OwnerText: 'Nestle', Id: 5, OwnerGroupId: 2, OwnerColor: '#f8a398' },
        { OwnerText: 'Phoenix', Id: 6, OwnerColor: '#7499e1' },
        { OwnerText: 'Hangout', Id: 7, OwnerColor: '#ffaa00' },
        { OwnerText: 'Rainbow', Id: 8, OwnerGroupId: 2, OwnerColor: '#f8a398' },
        { OwnerText: 'Photogenic', Id: 9, OwnerColor: '#7499e1' }
      ],
      textField: 'OwnerText', idField: 'Id', colorField: 'OwnerColor'
    }],
  eventSettings: { dataSource: resourceData, resourceColorField: 'Rooms' }
});
scheduleObj.appendTo('#Schedule');
var resourceButton = new ej.buttons.Button();
resourceButton.appendTo('#btn1');
resourceButton.element.onclick = function () {
  scheduleObj.scrollToResource(6, 'Owners');
};

