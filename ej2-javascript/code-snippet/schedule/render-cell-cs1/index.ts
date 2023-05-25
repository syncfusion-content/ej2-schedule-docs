

import { Schedule, Month, RenderCellEventArgs } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';

Schedule.Inject(Month);
let getWeather: Function = (value: Date) => {
    switch (value.getDay()) {
        case 0:
            return '<div class="weather-text">25°C</div>';
        case 1:
            return '<div class="weather-text">18°C</div>';
        case 2:
            return '<div class="weather-text">10°C</div>';
        case 3:
            return '<div class="weather-text">16°C</div>';
        case 4:
            return '<div class="weather-text">8°C</div>';
        case 5:
            return '<div class="weather-text">27°C</div>';
        case 6:
            return '<div class="weather-text">17°C</div>';
        default:
            return null;
    }
};
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    views: ['Month'],
    renderCell: (args: RenderCellEventArgs) => {
        if (args.elementType === 'monthCells') {
            let ele: Element = document.createElement('div');
            ele.innerHTML = getWeather(args.date);
            (args.element).appendChild(ele.firstChild);
        }
    },
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


