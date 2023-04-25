

import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
let dataManager: DataManager = new DataManager({
       url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
       adaptor: new ODataV4Adaptor
   });
let dataQuery: Query = new Query().from("Events").addParams('readOnly', 'true');
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2017, 5, 11),
    readonly: true,
    eventSettings: { dataSource: dataManager, query: dataQuery }
});
scheduleObj.appendTo('#Schedule');


