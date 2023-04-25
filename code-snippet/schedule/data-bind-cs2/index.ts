

import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
let dataManager: DataManager = new DataManager({
       url: 'https://ej2services.syncfusion.com/production/web-services/api/Schedule',
       adaptor: new ODataV4Adaptor,
       crossDomain: true
   });
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2020, 9, 20),
    readonly: true,
    eventSettings: { dataSource: dataManager}
});
scheduleObj.appendTo('#Schedule');


