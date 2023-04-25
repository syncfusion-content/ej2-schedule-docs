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
            { OwnerText: 'Nancy', Id: 1, OwnerGroupId: 1, OwnerColor: '#ffaa00', ResourceCssClass: "NancyResource" },
            { OwnerText: 'Steven', Id: 2, OwnerGroupId: 2, OwnerColor: '#f8a398', ResourceCssClass: "StevenResource" },
            { OwnerText: 'Michael', Id: 3, OwnerGroupId: 1, OwnerColor: '#7499e1', ResourceCssClass: "MichaelResource" }
        ],
        textField: 'OwnerText', idField: 'Id', groupIDField: 'OwnerGroupId', colorField: 'OwnerColor', cssClassField: "ResourceCssClass"
    }],
  eventSettings: { dataSource: resourceData, resourceColorField: 'Rooms' }
});
scheduleObj.appendTo('#Schedule');

