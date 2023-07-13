

import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
class CustomAdaptor extends ODataV4Adaptor {
    processResponse(): Object {
        let i: number = 0;
        // calling base class processResponse function
        let original: Object[] = super.processResponse.apply(this, arguments);
        // adding employee id
        original.forEach((item: Object) => item['EventID'] = ++i);
        return original;
    }
}

let dataManager: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
    adaptor: new CustomAdaptor
});
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(1996, 6, 9),
    readonly: true,
    eventSettings: {
        dataSource: dataManager,
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


