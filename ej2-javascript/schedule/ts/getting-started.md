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

This section briefly explains how to create [**JavaScript Scheduler**](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) component and configure its available functionalities in TypeScript, using Essential JS 2 [quickstart](https://github.com/syncfusion/ej2-quickstart.git) seed repository.

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

## Installation and configuration

Clone the Essential JS2 quickstart application project from [GitHub](https://github.com/syncfusion/ej2-quickstart.git) using the command prompt, and
install the necessary npm packages using the following command line scripts.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

>By default, the project is pre-configured with all the EJ2 dependencies.
For better understanding, remove all the dependencies from `src/system.config.js`
to get started with the Scheduler component.

Map the Scheduler component's dependency packages in `system.config.js` configuration file.

`[src/system.config.js]`

```javascript
System.config({
    paths: {
        'syncfusion:': './node_modules/@syncfusion/',
    },
    map: {
        app: 'app',

        //Syncfusion packages mapping
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-dropdowns": "syncfusion:ej2-dropdowns/dist/ej2-dropdowns.umd.min.js",
        "@syncfusion/ej2-compression": "syncfusion:ej2-compression/dist/ej2-compression.umd.min.js",
        "@syncfusion/ej2-file-utils": "syncfusion:ej2-file-utils/dist/ej2-file-utils.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-calendars": "syncfusion:ej2-calendars/dist/ej2-calendars.umd.min.js",
        "@syncfusion/ej2-excel-export": "syncfusion:ej2-excel-export/dist/ej2-excel-export.umd.min.js",
        "@syncfusion/ej2-schedule": "syncfusion:ej2-schedule/dist/ej2-schedule.umd.min.js"
    },
    packages: {
        'app': { main: 'app', defaultExtension: 'js' }
    }
});

System.import('app');
```

Scheduler CSS files are available in the ej2-schedule and its sub-component package folder. This can be referenced in your application using the following code.

`[src/styles/styles.css]`.

```
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-schedule/styles/material.css';
```

In case, if you want to make use of the combined CSS files of entire components, then you can avail it from the root folder of Essential JS 2 package and reference it with the code shown below.

```
@import '../../node_modules/@syncfusion/ej2/material.css';
```

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

```
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Schedule Typescript Component</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />

    <!--style reference from node_modules/@syncfusion/ej2/-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
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
