var scheduleObj = new ej.schedule.Schedule({
  width: '100%',
  height: '550px',
  views: ['Week', 'Month', 'TimelineWeek', 'TimelineMonth', 'Agenda'],
  selectedDate: new Date(2018, 3, 1),
  group: {
    resources: ['Rooms', 'Owners']
  },
  resources: [{
    field: 'RoomId', title: 'Room',
    name: 'Rooms', allowMultiple: false,
    dataSource: [
      { RoomText: 'ROOM 1', Id: 1, RoomGroupId: 1, RoomColor: '#cb6bb2' },
      { RoomText: 'ROOM 2', Id: 2, RoomGroupId: 2, RoomColor: '#56ca85' }
    ],
    textField: 'RoomText', idField: 'Id', groupIDField: 'RoomGroupId', colorField: 'RoomColor'
  }, {
    field: 'OwnerId', title: 'Owner',
    name: 'Owners', allowMultiple: true,
    dataSource: [
      { OwnerText: 'Nancy', Id: 1, OwnerGroupId: 1, OwnerColor: '#ffaa00' },
      { OwnerText: 'Steven', Id: 2, OwnerGroupId: 2, OwnerColor: '#f8a398' },
      { OwnerText: 'Michael', Id: 3, OwnerGroupId: 1, OwnerColor: '#7499e1' }
    ],
    textField: 'OwnerText', idField: 'Id', groupIDField: 'OwnerGroupId', colorField: 'OwnerColor'
  }],
  eventSettings: { dataSource: resourceData, resourceColorField: 'Rooms' }
});
scheduleObj.appendTo('#Schedule');

new ej.buttons.RadioButton({ value: 'Rooms', name: 'default', label: 'Rooms', checked: true, change: onChange }, '#room');
new ej.buttons.RadioButton({ value: 'Owners', name: 'default', label: 'Owners', checked: false, change: onChange }, '#owner');

function onChange(args) {
  scheduleObj.eventSettings.resourceColorField = args.value;
}

