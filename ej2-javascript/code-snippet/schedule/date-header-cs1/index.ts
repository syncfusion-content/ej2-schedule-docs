

import { Schedule, Day, Week, Agenda, TimelineViews, TimelineMonth } from '@syncfusion/ej2-schedule';
import { scheduleData } from './datasource.ts';
import { Internationalization } from '@syncfusion/ej2-base';

Schedule.Inject(Day, Week, Agenda, TimelineViews, TimelineMonth);
let instance: Internationalization = new Internationalization();
(window as TemplateFunction).getDateHeaderText = (value: Date) => {
    return instance.formatDate(value, { skeleton: 'Ed' });
};
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
(window as TemplateFunction).getWeather = getWeather;
interface TemplateFunction extends Window {
    getDateHeaderText?: Function;
    getWeather?: Function;
}
let scheduleObj: Schedule = new Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    dateHeaderTemplate: '<div class="date-text">${getDateHeaderText(data.date)}</div>${getWeather(data.date)}',
    views: ['Day', 'Week', 'Agenda', 'TimelineWorkWeek', 'TimelineMonth'],
    selectedDate: new Date(2018, 1, 15),
    cssClass: 'schedule-date-header-template',
    eventSettings: { dataSource: scheduleData }
});
scheduleObj.appendTo('#Schedule');


