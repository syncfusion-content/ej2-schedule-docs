---
layout: post
title: Getting started with ##Platform_Name## Schedule control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Schedule control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Schedule control

This section briefly explains how to create [**JavaScript Scheduler**](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) component and configure its available functionalities in TypeScript, using Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

The following list of dependencies are required to use the Schedule component in your application.

```javascript
|-- @syncfusion/ej2-schedule
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-excel-export
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-navigations
```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

```
    git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart
```

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

```
    cd ej2-quickstart
```

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

```
    npm install
```
![ej2 typescript seed local setup](images/local-setup.png)

> To learn more about the individual packages and different ways to install them, refer [here](https://ej2.syncfusion.com/documentation/installation-and-upgrade/installation/).

## Import the Syncfusion CSS styles

Syncfusion JavaScript controls come with [built-in themes](https://ej2.syncfusion.com/documentation/appearance/theme/), which are available in the installed packages. It's easy to adapt the Syncfusion JavaScript controls to match the style of your application by referring to one of the built-in themes.

The quickstart application is preconfigured to use the `Material` theme in the `~/src/styles/styles.css` file, as shown below: 

```
  @import "../../node_modules/@syncfusion/ej2/material.css";
```

> You can check out the [themes](https://ej2.syncfusion.com/documentation/appearance/theme/) section to know more about built-in themes and CSS reference for individual controls.

## Module injection

Each view types available in Scheduler are maintained as individual modules and to work with those views, it is necessary to inject the required modules. The following modules are available in Scheduler namely,

* **Day** - Inject this module to work with the day view.
* **Week** - Inject this module to work with the week view.
* **WorkWeek** - Inject this module to work with the work week view.
* **Month** - Inject this module to work with the month view.
* **Agenda** - Inject this module to work with the agenda view.

All the above-mentioned modules can be injected into Scheduler using the `Schedule.Inject` method within the app.ts file.

```ts
import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
```

## Initialize the Schedule

Add the HTML div tag defined with an `id` attribute in your `index.html` file, where the Scheduler element is initialized.

`[src/index.html]`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Schedule Typescript Component</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
</head>
<body>
    <!--Element where the Schedule will be rendered-->
    <div id="Schedule"></div>
</body>
</html>
```

Import the Scheduler component to your `app.ts` file as shown below, and initialize it to the element defined with an id `Schedule` in the `index.html` file.

`[src/app/app.ts]`

```ts
import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
let scheduleObj: Schedule = new Schedule();
scheduleObj.appendTo('#Schedule');
```

Now, run the application in the browser using the following command.

```
npm start
```

The output will display the empty Scheduler.

## Populating appointments

To populate the empty Scheduler with appointments, define either the local JSON data or remote data through the `dataSource` property available within the `eventSettings` option. To define any appointments, start and end time fields are mandatory. In the following example, you can see the appointment defined with default fields such as Id, Subject, StartTime and EndTime.

```ts
import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: {
        dataSource: [{
            id: 1,
            subject: 'Meeting',
            startTime: new Date(2018, 1, 15, 10, 0),
            endTime: new Date(2018, 1, 15, 12, 30)
        }];
    }
});
scheduleObj.appendTo('#Schedule');
```

You can also provide different names to these default fields, for which the custom names of those fields must be mapped appropriately within `fields` property as shown below.

```ts
import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';

let data: object [] = [{
    Id: 2,
    EventName: 'Meeting',
    StartTime: new Date(2018, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 15, 12, 30),
    IsAllDay: false
}];
Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: {
        dataSource: data,
        fields: {
              id: 'Id',
              subject: { name: 'EventName' },
              isAllDay: { name: 'IsAllDay' },
              startTime: { name: 'StartTime' },
              endTime: { name: 'EndTime' },
            }
    }
});
scheduleObj.appendTo('#Schedule');
```

The other fields available in Scheduler can be referred from [here](./appointments#event-fields).

## Setting date

Scheduler usually displays the system date as its current date. To change the current date of Scheduler with specific date, define the `selectedDate` property.

```ts
import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15)
    }
});
scheduleObj.appendTo('#Schedule');
```

## Setting view

Scheduler displays `Week` view by default. To change the current view, define the applicable view name to the `currentView` property. The applicable view names are,

* Day
* Week
* Workweek
* Month
* Year
* Agenda
* MonthAgenda
* TimelineDay
* TimelineWeek
* TimelineWorkWeek
* TimelineMonth
* TimelineYear

```ts
import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    currentView: 'Month'
    }
});
scheduleObj.appendTo('#Schedule');
```

## Individual view customization

Each individual Scheduler views can be customized with its own options such as setting different start and end hour on Week and Work Week views, whereas hiding the weekend days on Month view alone.
This can be achieved by defining views property to accept the array of object type, where each object depicts the individual view customization.

Now, run the application in the browser using the following command.

```
npm start
```

The output will display the Scheduler with the specified view configuration.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/views-model-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/views-model-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/schedule/views-model-cs2" %}

> You can also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/material/schedule/overview.html) that shows how to use the toolbar buttons to play with Scheduler functionalities.
