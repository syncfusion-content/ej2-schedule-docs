

import { Schedule, TimelineViews, TimelineMonth, Agenda } from '@syncfusion/ej2-schedule';
import { resourceData } from './datasource.ts';

Schedule.Inject(TimelineViews, TimelineMonth, Agenda);
let scheduleObj: Schedule = new Schedule({
  width: "100%",
  height: "550px",
  currentView: "TimelineWeek",
  views: ["TimelineWeek", "TimelineMonth", "Agenda"],
  selectedDate: new Date(2018, 3, 4),
  group: {
    resources: ["Rooms", "Owners"]
  },
  resources: [
    {
      field: "RoomId", title: "Room",
      name: "Rooms", allowMultiple: false,
      dataSource: [
        { RoomText: "ROOM 1", Id: 1, RoomColor: "#cb6bb2", IsExpand: false },
        { RoomText: "ROOM 2", Id: 2, RoomColor: "#56ca85" }
      ],
      textField: "RoomText", idField: "Id", colorField: "RoomColor", expandedField: "IsExpand"
    },
    {
      field: "OwnerId", title: "Owner",
      name: "Owners", allowMultiple: true,
      dataSource: [
        { OwnerText: "Nancy", Id: 1, OwnerGroupId: 1, OwnerColor: "#ffaa00" },
        { OwnerText: "Steven", Id: 2, OwnerGroupId: 2, OwnerColor: "#f8a398" },
        { OwnerText: "Michael", Id: 3, OwnerGroupId: 1, OwnerColor: "#7499e1" },
        { OwnerText: "Alice", Id: 4, OwnerGroupId: 2, OwnerColor: "#7fa900" }
      ],
      textField: "OwnerText", idField: "Id", groupIDField: "OwnerGroupId", colorField: "OwnerColor"
    }
  ],
  eventSettings: { dataSource: resourceData }
});
scheduleObj.appendTo("#Schedule");


