

import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
let dataManager: DataManager = new DataManager({
       url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
       adaptor: new ODataV4Adaptor
   });
let dataQuery: Query = new Query().addParams('readOnly', 'true');
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(1996, 6, 9),
    readonly: true,
    eventSettings: { dataSource: dataManager, query: dataQuery,
        fields: {
            id: 'Id',
            subject: { name: 'ShipName' },
            location: { name: 'ShipCountry' },
            description: { name: 'ShipAddress' },
            startTime: { name: 'OrderDate' },
            endTime: { name: 'RequiredDate' },
            recurrenceRule: { name: 'ShipRegion' }
        } 
    }
});
scheduleObj.appendTo('#Schedule');


