

import {Schedule,Day,Week,TimelineViews,Month,Agenda,DragAndDrop} from '@syncfusion/ej2-schedule';

let data: object[] = [
  {
    EndTime: new Date(2022, 4, 4, 0, 0),
    Id: '1',
    IsAllDay: true,
    StartTime: new Date(2022, 4, 2, 0, 0),
    Subject:
      '<i class="fas fa-truck-pickup"></i> | Install Bullnose Brick/ Coping | Jones | 3521',
  },
  {
    EndTime: new Date(2022, 3, 30, 0, 0),
    Id: '2',
    IsAllDay: true,
    StartTime: new Date(2022, 3, 29, 0, 0),
    Subject:
      '<i class="fas fa-truck-pickup"></i> | Plumbing Checklist | Jaimungal | 3671 :: Pool',
  },
  {
    EndTime: new Date(2022, 4, 7, 0, 0),
    Id: '3',
    IsAllDay: true,
    StartTime: new Date(2022, 4, 2, 0, 0),
    Subject:
      '<i class="fas fa-truck-pickup"></i> | Waterline Tile | Jaimungal | 3671 :: Pool',
  },
  {
    EndTime: new Date(2022, 3, 30, 0, 0),
    Id: '4',
    IsAllDay: true,
    StartTime: new Date(2022, 3, 28, 0, 0),
    Subject:
      '<i class="fas fa-truck-pickup"></i> | Underground Plumbing | Jaimungal | 3671 :: Pool',
  },
  {
    EndTime: new Date(2022, 4, 4, 0, 0),
    Id: '5',
    IsAllDay: true,
    StartTime: new Date(2022, 4, 3, 0, 0),
    Subject:
      '<i class="fas fa-truck-pickup"></i> | Backfill/ Compaction | Jaimungal | 3671 :: Pool',
  },
  {
    EndTime: new Date(2022, 4, 7, 0, 0),
    Id: '6',
    IsAllDay: true,
    StartTime: new Date(2022, 4, 4, 0, 0),
    Subject:
      '<i class="fas fa-truck-pickup"></i> | Install Bullnose Brick/ Coping | Jaimungal | 3671 :: Pool',
  },
  {
    EndTime: new Date(2022, 4, 1, 0, 0),
    Id: '7',
    IsAllDay: true,
    StartTime: new Date(2022, 3, 30, 0, 0),
    Subject:
      '<i class="fas fa-truck-pickup"></i> | Steel/ Checklist | VP Highland Model | 3719 :: Pool',
  },
  {
    Description:
      'Let Yves know I did not see skimmer southern gunite did shell',
    EndTime: new Date(2022, 4, 4, 0, 0),
    Id: '8',
    IsAllDay: true,
    StartTime: new Date(2022, 4, 3, 0, 0),
    Subject:
      '<i class="fas fa-truck-pickup"></i> | Shotcrete Shell | VP Highland Model | 3719 :: Pool',
  },
  {
    EndTime: new Date(2022, 3, 30, 0, 0),
    Id: '9',
    IsAllDay: true,
    StartTime: new Date(2022, 3, 29, 0, 0),
    Subject:
      '<i class="fas fa-truck-pickup"></i> | Tile Selections/ Pavers/ Finish | VP Highland Model | 3719 :: Pool',
  },
  {
    EndTime: new Date(2022, 3, 30, 0, 0),
    Id: '10',
    IsAllDay: true,
    StartTime: new Date(2022, 3, 26, 0, 0),
    Subject:
      '<i class="fas fa-truck-pickup"></i> | Layout/ Form Rebar Shell | VP Highland Model | 3719 :: Pool',
  },
];
var initialLoad = true;
Schedule.Inject(Day, Week, TimelineViews, Month, Agenda, DragAndDrop);
let scheduleObj: Schedule = new Schedule({
  dataBound() {
    if (initialLoad) {
      this.element.querySelector('.e-all-day-appointment-section').click();
      initialLoad = false;
    }
  },
  height: '550px',
  selectedDate: new Date(2022, 3, 25),
  views: ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'],
  eventSettings: {
    dataSource: data,
  },
});
scheduleObj.appendTo('#Schedule');


