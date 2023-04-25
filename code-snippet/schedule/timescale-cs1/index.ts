

import { Schedule, Day, Week, WorkWeek } from "@syncfusion/ej2-schedule";
import { Internationalization } from "@syncfusion/ej2-base";
import { scheduleData } from './datasource.ts';

Schedule.Inject(Day, Week, WorkWeek);
let instance: Internationalization = new Internationalization();
(window as TemplateFunction).majorSlotTemplate = (date: Date) => {
  return instance.formatDate(date, { skeleton: "hm" });
};
interface TemplateFunction extends Window {
  majorSlotTemplate?: Function;
}
let scheduleObj: Schedule = new Schedule({
  width: "100%",
  height: "550px",
  selectedDate: new Date(2018, 1, 15),
  startHour: "08:45",
  views: ["Day", "Week", "WorkWeek"],
  timeScale: {
    majorSlotTemplate: "#majorSlotTemplate"
  },
  eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo("#Schedule");


