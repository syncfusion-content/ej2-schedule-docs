---
layout: post
title: Module injection in ##Platform_Name## Schedule control | Syncfusion
description: Learn here all about Module injection in Syncfusion ##Platform_Name## Schedule control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Module injection 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Module injection in ##Platform_Name## Schedule control

The crucial step on creating a Scheduler with required views, is to import and inject the required modules. The modules that are available on Scheduler to work with its related functionalities are as follows.

* `Day` - Inject this module to work with day view.
* `Week` - Inject this module to work with week view.
* `WorkWeek` - Inject this module to work with work week view.
* `Month` - Inject this module to work with month view.
* `Agenda` - Inject this module to work with agenda view.
* `MonthAgenda` - Inject this module to work with month agenda view.
* `TimelineViews` - Inject this module to work with timeline day, timeline week, and timeline work week views.
* `TimelineMonth` - Inject this module to work with timeline month view.
* `DragAndDrop` - Inject this module to allow drag and drop of appointments on Scheduler.
* `Resize` - Inject this module for enabling the resize functionality of appointments on Scheduler.

## Module injection

The required modules should be injected into the Scheduler using the `Inject` method of Scheduler within the `app.ts` file as shown below. On doing so, only the injected module functionalities will be loaded and can be worked with Scheduler.

`[src/app/app.ts]`

```ts
Schedule.Inject(Day, Week, WorkWeek, Month, Agenda, MonthAgenda);
```

**Note:** If a Scheduler `currentView` is set to any one of the available views without injecting that respective view module, then a script error will occur and the Scheduler will not render.

> You can refer to our [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/material/schedule/overview.html) to knows how to present and manipulate data.
