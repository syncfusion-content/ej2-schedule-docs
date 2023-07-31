---
layout: post
title: Data binding in ##Platform_Name## Schedule control | Syncfusion
description: Learn here all about Data binding in Syncfusion ##Platform_Name## Schedule control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Data binding 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in ##Platform_Name## Schedule control

The Scheduler uses `DataManager`, which supports both RESTful data service binding and JavaScript object array binding. The [`dataSource`](../api/schedule/eventSettings#datasource) property of Scheduler can be assigned either with the instance of `DataManager` or JavaScript object array collection, as it supports the following two kind of data binding methods:

* Local data
* Remote data

## Binding local data

To bind local JSON data to the Scheduler, you can simply assign a JavaScript object array to the [`dataSource`](../api/schedule/eventSettings#datasource) option of the scheduler within the `eventSettings` property. The JSON object dataSource can also be provided as an instance of `DataManager` and assigned to the Scheduler `dataSource` property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/data-bind-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/data-bind-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs1" %}
{% endif %}

> By default, `DataManager` uses `JsonAdaptor` for binding local data.

You can also bind different field names to the default event fields as well as include additional custom fields to the event object collection which can be referred [here](./appointments/#event-fields).

## Binding remote data

Any kind of remote data services can be bound to the Scheduler. To do so, create an instance of `DataManager` and provide the service URL to the `url` option of `DataManager` and then assign it to the [`dataSource`](../api/schedule/eventSettings#datasource) property within `eventSettings`.

### Using ODataV4Adaptor

[ODataV4](https://www.odata.org/documentation/) is a standardized protocol for creating and consuming data. Refer to the following code example to retrieve the data from ODataV4 service using the DataManager. To connect with ODataV4 service end points, it is necessary to make use of `ODataV4Adaptor` within `DataManager`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/data-bind-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/data-bind-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs2" %}
{% endif %}

### Filter events using the in-built query

To enable server-side filtering operations based on predetermined conditions, the [`includeFiltersInQuery`](https://ej2.syncfusion.com/documentation/api/schedule/eventSettings/#includefiltersinquery) API can be set to true, this allows the filter query to be constructed using the start date, end date, and recurrence rule which in turn enables the request to be filtered accordingly.

This method greatly improves the component's performance by reducing the data that needs to be transferred to the client side. As a result, the component's efficiency and responsiveness are significantly enhanced, resulting in a better user experience. However, it is important to consider the possibility of longer query strings, which may cause issues with the maximum URL length or server limitations on query string length.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/data-bind-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/data-bind-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs3" %}
{% endif %}

The following image represents how the parameters are passed using ODataV4 filter.

![ODataV4 filter](images/filterQueryBehaviour.jpg)

### Using custom adaptor

It is possible to create your own custom adaptor by extending the built-in available adaptors. The following example demonstrates the custom adaptor usage and how to add a custom field `EventID` for the appointments by overriding the built-in response processing using the `processResponse` method of the `ODataV4Adaptor`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/data-bind-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/data-bind-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs4" %}
{% endif %}

## Loading data via AJAX post

You can bind the event data through external ajax request and assign it to the `dataSource`property of Scheduler. In the following code example, we have retrieved the data from server with the help of ajax request and assigned the resultant data to the `dataSource` property of Scheduler within the `onSuccess` event of Ajax.

`[src/app/app.ts]`

```ts
import { Ajax } from '@syncfusion/ej2-base';
import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
let dataManager: object = [];
let ajax = new Ajax('Home/GetData', 'GET', false);
ajax.onSuccess = function (value) {
    dataManager = value;
};
ajax.send();
let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2017, 5, 11),
    eventSettings: { dataSource: dataManager }
});
scheduleObj.appendTo('#Schedule');
```

> Definition for the controller method `GetData` can be referred [here](#scheduler-crud-actions).

## Passing additional parameters to the server

To send an additional custom parameter to the server-side post, you need to make use of the `addParams` method of `Query`. Now, assign this `Query` object with additional parameters to the [`query`](../api/schedule/eventSettings/#query) property of Scheduler.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/data-bind-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/data-bind-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs5" %}
{% endif %}

> The parameters added using the [`query`](../api/schedule/eventSettings/#query) property will be sent along with the data request sent to the server on every scheduler actions.

## Handling failure actions

During the time of Scheduler interacting with server, there are chances that some server-side exceptions may occur. You can acquire those error messages or exception details in client-side using the [`actionFailure`](../api/schedule#actionfailure) event of Scheduler.

The argument passed to the [`actionFailure`](../api/schedule#actionfailure) event contains the error details returned from the server.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/data-bind-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/data-bind-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs6" %}
{% endif %}

> The [`actionFailure`](../api/schedule#actionfailure) event will be triggered not only on server returning errors, but also when there is an exception while processing any of the Scheduler CRUD actions.

## Scheduler CRUD actions

The CRUD (Create, Read, Update and Delete) actions can be performed easily on Scheduler appointments using the various adaptors available within the `DataManager`. Most preferably, we will be using `UrlAdaptor` for performing CRUD actions on scheduler appointments.

```ts
import { Schedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-schedule';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
let dataManager: DataManager = new DataManager({
       url: 'Home/GetData', // 'controller/actions'
       crudUrl: 'Home/UpdateData',
       adaptor: new UrlAdaptor
   });

let scheduleObj: Schedule = new Schedule({
    height: '550px',
    selectedDate: new Date(2017, 5, 5),
    eventSettings: { dataSource: dataManager }
});
scheduleObj.appendTo('#Schedule');
```

The server-side controller code to handle the CRUD operations are as follows.

```c#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ScheduleSample.Models;

namespace ScheduleSample.Controllers
{
    public class HomeController : Controller
    {
        ScheduleDataDataContext db = new ScheduleDataDataContext();
        public ActionResult Index()
        {
            return View();
        }  
        public JsonResult LoadData()  // Here we get the Start and End Date and based on that can filter the data and return to Scheduler
        {
            var data = db.ScheduleEventDatas.ToList();
            return Json(data, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult UpdateData(EditParams param)
        {
            if (param.action == "insert" || (param.action == "batch" && param.added != null)) // this block of code will execute while inserting the appointments
            {
                var value = (param.action == "insert") ? param.value : param.added[0];
                int intMax = db.ScheduleEventDatas.ToList().Count > 0 ? db.ScheduleEventDatas.ToList().Max(p => p.Id) : 1;
                DateTime startTime = Convert.ToDateTime(value.StartTime);
                DateTime endTime = Convert.ToDateTime(value.EndTime);
                ScheduleEventData appointment = new ScheduleEventData()
                {
                    Id = intMax + 1,
                    StartTime = startTime.ToLocalTime(),
                    EndTime = endTime.ToLocalTime(),
                    Subject = value.Subject,
                    IsAllDay = value.IsAllDay,
                    StartTimezone = value.StartTimezone,
                    EndTimezone = value.EndTimezone,
                    RecurrenceRule = value.RecurrenceRule,
                    RecurrenceID = value.RecurrenceID,
                    RecurrenceException = value.RecurrenceException
                };
                db.ScheduleEventDatas.InsertOnSubmit(appointment);
                db.SubmitChanges();
            }
            if (param.action == "update" || (param.action == "batch" && param.changed != null)) // this block of code will execute while updating the appointment
            {
                var value = (param.action == "update") ? param.value : param.changed[0];
                var filterData = db.ScheduleEventDatas.Where(c => c.Id == Convert.ToInt32(value.Id));
                if (filterData.Count() > 0)
                {
                    DateTime startTime = Convert.ToDateTime(value.StartTime);
                    DateTime endTime = Convert.ToDateTime(value.EndTime);
                    ScheduleEventData appointment = db.ScheduleEventDatas.Single(A => A.Id == Convert.ToInt32(value.Id));
                    appointment.StartTime = startTime.ToLocalTime();
                    appointment.EndTime = endTime.ToLocalTime();
                    appointment.StartTimezone = value.StartTimezone;
                    appointment.EndTimezone = value.EndTimezone;
                    appointment.Subject = value.Subject;
                    appointment.IsAllDay = value.IsAllDay;
                    appointment.RecurrenceRule = value.RecurrenceRule;
                    appointment.RecurrenceID = value.RecurrenceID;
                    appointment.RecurrenceException = value.RecurrenceException;
                }
                db.SubmitChanges();
            }
            if (param.action == "remove" || (param.action == "batch" && param.deleted != null)) // this block of code will execute while removing the appointment
            {
                if (param.action == "remove")
                {
                    int key = Convert.ToInt32(param.key);
                    ScheduleEventData appointment = db.ScheduleEventDatas.Where(c => c.Id == key).FirstOrDefault();
                    if (appointment != null) db.ScheduleEventDatas.DeleteOnSubmit(appointment);
                }
                else
                {
                    foreach (var apps in param.deleted)
                    {
                        ScheduleEventData appointment = db.ScheduleEventDatas.Where(c => c.Id == apps.Id).FirstOrDefault();
                        if (appointment != null) db.ScheduleEventDatas.DeleteOnSubmit(appointment);
                    }
                }
                db.SubmitChanges();
            }
            var data = db.ScheduleEventDatas.ToList();
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        public class EditParams
        {
            public string key { get; set; }
            public string action { get; set; }
            public List<ScheduleEventData> added { get; set; }
            public List<ScheduleEventData> changed { get; set; }
            public List<ScheduleEventData> deleted { get; set; }
            public ScheduleEventData value { get; set; }
        }
    }
}
```

## Configuring Scheduler with Google API service

We have assigned our custom created Google Calendar url to the DataManager and assigned the same to the Scheduler `dataSource`. Since the events data retrieved from the Google Calendar will be in its own object format, therefore it needs to be resolved manually within the Scheduler’s `dataBinding` event. Within this event, the event fields needs to be mapped properly and then assigned to the result.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/data-bind-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/data-bind-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/data-bind-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/data-bind-cs7" %}
{% endif %}

## Salesforce Integration

### Introduction

In this blog post, we will provide you with a detailed step-by-step guide on how to seamlessly integrate the EJ2 Scheduler component into Salesforce. By integrating it into Salesforce, you can enhance your productivity and streamline your scheduling processes. So, let's dive into the integration process and unlock the full potential of the EJ2 Scheduler component within Salesforce.

### Prerequisites

Before we get started, make sure you have the following prerequisites need to be installed

* [Salesforce CLI](https://developer.salesforce.com/tools/salesforcecli)

### Configuring Salesforce 

To begin the integration process, we need to configure Salesforce by following these steps.

1. [Sign up](https://developer.salesforce.com/signup) with salesforce developer account, if you don’t have salesforce account, sign up for one to access the necessary tools and resources for integration.

2. [Log in](https://login.salesforce.com/) with salesforce account. 

3.After successful login, search for Dev Hub in the quick find search box and select Dev Hub. In the Dev Hub setup tab, ensure that the Enable Dev Hub option is enabled. If it's not enabled, enable it to proceed further.

![Enable Dev Hub](images/Salesforce-enable-dev-hub.png)

### Creating a Salesforce Project

Now that we have Salesforce configured, let's create a [Salesforce project](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm) for our integration. 

1. In your preferred location, create a base directory for your Salesforce project. For example, you can create a directory named salesforceApp using the following command:

```
mkdir salesforceApp 
```

2. Navigate to the base directory you created in the previous step and generate a Salesforce DX project using the following CLI command.

```
sfdx project:generate -n scheduler-salesforce-app 
```

![Salesforce App](images/Salesforce-app.png)

### Authorization of salesforce project 

Before proceeding further, we need to authorize our Salesforce project by following these steps. 

1. Run the following command to authorize your Salesforce project with your Salesforce account in the browser.

```
sfdx org:login:web -d 
```

![Salesforce Authorization](images/Salesforce-authorization.png)

2. Open the sfdx-project.json file located in salesforceApp/scheduler-salesforce-app and update the sfdcLoginUrl with the domain URL of your Salesforce account as shown in image (fig 2). You can obtain the domain URL from the My Domain setup tab in Salesforce as shown in image (fig 1). 

fig 1
![Salesforce project (fig 1)](images/Salesforce-project-fig1.png)

fig 2
![Salesforce project (fig 2)](images/Salesforce-project-fig2.png)

### Create scratch Org 

To facilitate development and testing, we will create a scratch org using the following steps. 

1. Run the following command to create a new scratch org, which will provide a fresh Salesforce environment for development and testing with org id and username as link below image.

```
sfdx org:create:scratch -f config/project-scratch-def.json 
```

![Salesforce Create scratch Org](images/Salesforce-create-scratch.png)

### Adding Static Resources 

To integrate the Syncfusion scripts and styles as static resource files within Salesforce, follow these steps.  
 
1. Use the following command to open the scratch project in the browser

```
sfdx org:open -o <stratch org user name> 
```

Replace <scratch org username> with the username of your scratch org, which was generated during the scratch org creation process.  
 
2. In the Salesforce setup menu, search for Static Resources and click on New in the static resources tab. 

![Salesforce Setup menu](images/Salesforce-setup-menu.png)

3. Load the Syncfusion scripts and styles as static files in a zip format, which you can obtain from the [CRG](https://crg.syncfusion.com/).

4. In the static resource tab, provide a name for the static resource files, upload the zip file, and change the cache control to Public. Click Save to add the static resources to your Salesforce project.

![Salesforce Static Resource](images/Salesforce-static-resource.png)

### Adding CSP trusted sites 

To ensure seamless integration and prevent content security policy issues, follow these steps. 

1. In the Salesforce setup menu, search for CSP Trusted Sites and click on New Trusted Site.

![Salesforce CSP trusted sites](images/Salesforce-CSP-trusted-sites.png)

2. Enter the trusted site name and URL. For example, if the Syncfusion static styles refer to https://fonts.googleapis.com, enter that URL as the trusted site URL.  
 
3. Enable the following options to bypass the CSP issues and Click "Save" to apply the changes. 
 
    * Allow site for font-src 
    * Allow site for style-src 

![CSP trusted sites](images/CSP-trusted-sites.png)

### Creating Data Model for Appointment 

To begin, navigate to the Object Manager in Salesforce and select Create followed by Custom Object.

![Salesforce Object manager](images/Salesforce-object-manager.png)

In the custom object section, enter a meaningful label for your custom object. For this example, let's name it SchedulerEvent. Once done, click Save to create the custom object. 

![Salesforce New custom Object](images/Salesforce-new-custom-object.png)

### Defining Fields and Relationships 

let's configure the fields and relationships for the SchedulerEvent object. To do so Click on New to create a new field. 

![Salesforce Field and Relationship](images/Salesforce-field-relationship.png)

1. Setting the Data Type for StartTime. Choose DateTime as the data type for the StartTime field. This field will store the starting time of each appointment.

![Salesforce Scheduler Events](images/Salesforce-scheduler-events.png)

2. Provide a clear label for the StartTime field and click Next. Once you've reviewed the settings, click Save & New to proceed.

![Salesforce New custom field](images/Salesforce-custom-field.png)

3. Repeat the same steps as above to create the EndTime field, which will store the ending time of each appointment. Creating the EndTime Field. Once you've reviewed the settings, click Save & New to proceed.

![Salesforce setting allday field](images/Salesforce-setting-allday-field.png)

4. Choose Checkbox as the data type for the IsAllDay field. This field will be marked when an appointment is scheduled for the entire day. 

![Salesforce New custom field](images/Salesforce-custom-field.png)

5. Assign an appropriate label, such as IsAllDay, to the checkbox field. Click Next to review the settings and then click Save & New to proceed. 

![Salesforce New custom field](images/Salesforce-custom-field.png)

6. Choose Text as the data type for the Location/Recurrence Rule/Recurrence Id /Recurrence Exception field to store the location field and recurrence rule for each appointment as shown in the image respectively. Click Next to review the settings and then click Save to proceed. 

![Salesforce New custom field](images/Salesforce-custom-field.png)

7. Based on your specific requirements, you can add more fields to the SchedulerEvent object by following the same steps outlined above.

![Salesforce New custom field](images/Salesforce-custom-field.png)

### Creating a Lightning web component 

To integrate the EJ2 Scheduler into your Salesforce project, we will create a [Lightning web component](https://developer.salesforce.com/docs/platform/lwc/guide/get-started-introduction.html). Follow these steps. 

1. In your Salesforce project, run the following command to generate a Lightning web component named scheduler.

```
sfdx lightning:generate:component --type lwc -n scheduler -d force-app/main/default/lwc 
```

![Salesforce Creating Lightning web component](images/Salesforce-creating-lightning-web.png)

2. Open the scheduler.js-meta.xml file located in "force-app/main/default/lwc/scheduler" and modify the component definition to expose it in the Lightning App Builder. Here's an example of the modified file. 

```force-app/main/default/lwc/scheduler/scheduler.js-meta.xml
<?xml version="1.0" encoding="UTF-8"?> 
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata"> 
    <apiVersion>57.0</apiVersion> 
    <isExposed>true</isExposed> 
    <targets> 
        <target>lightning__AppPage</target> 
    </targets> 
    <targetConfigs> 
        <targetConfig targets="lightning__AppPage"> 
            <property name="height" label="Height" type="Integer" default="800" /> 
        </targetConfig> 
    </targetConfigs> 
</LightningComponentBundle> 
```

3. Open the scheduler.html file located in "force-app/main/default/lwc/scheduler" and add an element with a class name to append the Syncfusion scheduler. Here's an example of the modified file.
 
```force-app/main/default/lwc/scheduler/scheduler.html
<template> 
    <div class="syncfusionscheduler" lwc:dom="manual" style='width: 100%;'></div> 
</template> 
```

4. Open the scheduler.js file located in "force-app/main/default/lwc/scheduler" and implement the scheduler code in renderedCallback function. The static scripts and styles are loaded using the loadScript and loadStyle imports. Here's an example of the modified file.

```force-app/main/default/lwc/scheduler/scheduler.js
import { LightningElement, api } from 'lwc'; 
import { ShowToastEvent } from "lightning/platformShowToastEvent"; 
import { loadStyle, loadScript } from "lightning/platformResourceLoader"; 
import { createRecord, updateRecord, deleteRecord } from "lightning/uiRecordApi"; 
// Static resources 
import schedulerFiles from "@salesforce/resourceUrl/syncfusionscheduler"; 

// Controllers 
import getEvents from "@salesforce/apex/SchedulerData.getEvents";
function getEventsData(eventData) { 
    const data = eventData.events.map((a) => ({ 
        Id: a.Id, 
        Subject: a.Name, 
        Location: a.Location__c, 
        StartTime: a.Start_Time__c, 
        EndTime: a.End_Time__c, 
        IsAllDay: a.IsAllDay__c, 
        RecurrenceRule: a.RecurrenceRule__c, 
        RecurrenceID: a.Recurrence_Id__c, 
        RecurrenceException: a.RecurrenceException__c 
    })); 
    return data; 
} 

export default class Scheduler extends LightningElement { 
    static delegatesFocus = true;   
    @api height; 
    schedulerInitialized = false;  
    renderedCallback() { 
        if (this.schedulerInitialized) { 
            return; 
        } 
        this.schedulerInitialized = true;  
        Promise.all([ 
            loadScript(this, schedulerFiles + "/syncscheduler.js"), 
            loadStyle(this, schedulerFiles + "/syncscheduler.css") 
        ]) 
            .then(() => { 
                this.initializeUI(); 
            }) 
            .catch((error) => { 
                this.dispatchEvent( 
                    new ShowToastEvent({ 
                        title: "Error loading scheduler", 
                        message: error.message, 
                        variant: "error" 
                    }) 
                ); 
            }); 
    } 
    initializeUI() { 
        const root = this.template.querySelector(".syncfusionscheduler"); 
        root.style.height = this.height + "px"; 
        const scheduleOptions = { 
            height: this.height + "px", 
            selectedDate: new Date(), 
            actionComplete: function (args) { 
                //To perform CRUD in salesforce backend 
                if (args.addedRecords && args.addedRecords.length > 0) { 
                    var data = args.addedRecords[0]; 
                    var insert = { 
                        apiName: "SchedulerEvent__c", 
                        fields: { 
                            Name: data.Subject, 
                            Location__c: data.Location, 
                            Start_Time__c: data.StartTime, 
                            End_Time__c: data.EndTime, 
                            IsAllDay__c: data.IsAllDay, 
                            RecurrenceRule__c: data.RecurrenceRule, 
                            Recurrence_Id__c: data.RecurrenceID, 
                            RecurrenceException__c: data.RecurrenceException 
                        } 
                    }; 
                    createRecord(insert).then((res) => { 
                        if (scheduleObj) 
                        { 
                            scheduleObj.eventSettings.dataSource[scheduleObj.eventSettings.dataSource.length - 1].Id = res.id; 
                            scheduleObj.refreshEvents(); 
                        } 
                        return { tid: res.id, ...res }; 
                    }); 
                } 
                if (args.changedRecords && args.changedRecords.length > 0) { 
                    var data = args.changedRecords[0]; 
                    var update = { 
                        fields: { 
                            Id: data.Id, 
                            Name: data.Subject, 
                            Location__c: data.Location, 
                            Start_Time__c: data.StartTime, 
                            End_Time__c: data.EndTime, 
                            IsAllDay__c: data.IsAllDay, 
                            RecurrenceRule__c: data.RecurrenceRule, 
                            RecurrenceException__c: data.RecurrenceException, 
                            Recurrence_Id__c: data.RecurrenceID 
                        } 
                    }; 
                    updateRecord(update).then(() => ({})); 
                } 
                if (args.deletedRecords && args.deletedRecords.length > 0) { 
                    args.deletedRecords.forEach(event => { 
                        deleteRecord(event.Id).then(() => ({})); 
                    }); 
                } 
            } 
        }; 
        const scheduleObj = new ej.schedule.Schedule(scheduleOptions, root); 
        getEvents().then((data) => { 
            const eventData = getEventsData(data); 
            scheduleObj.eventSettings.dataSource = eventData; 
            scheduleObj.dataBind(); 
        }); 
    } 
} 
```

### Creating Apex Class 

Apex class that facilitates smooth interactions between your Lightning component and the data model. By following these steps, you will be able to fetch and manipulate data from the SchedulerEvent custom object effortlessly. 

Use the following command to create Apex class with the name SchedulerData. 

```
sfdx apex:generate:class -n SchedulerData -d force-app/main/default/classes	 
```

![Salesforce Creating Apex Class](images/Salesforce-creating-apex.png)

Open the SchedulerData.cls file located in "force-app/main/default/classes/SchedulerData.cls". 
This will fetch the event data from salesforce backend. Here's an example of the modified file. 

```force-app/main/default/classes/SchedulerData.cls
public with sharing class SchedulerData { 
    @RemoteAction 
    @AuraEnabled(cacheable=true) 
    public static Map<String, Object> getEvents() {  
        // fetching the Records via SOQL 
        List<SchedulerEvent__c> Events = new List<SchedulerEvent__c>(); 
        Events = [SELECT Id, Name, Start_Time__c, End_Time__c, IsAllDay__c, 
            Location__c, RecurrenceRule__c, Recurrence_Id__c, RecurrenceException__c FROM SchedulerEvent__c];
        Map<String, Object> result = new Map<String, Object>{'events' => Events }; 
        return result; 
   } 
} 
```

### Pull Scratch Org 

To retrieve the changes made in the scratch org and sync them with your local Salesforce project, use the following command. 

```
sfdx project:retrieve:start -o <scratch org use name> 
```

Replace <scratch org username> with the username of your scratch org.

![Salesforce Pull Scratch](images/Salesforce-pull-scratch.png)

### Push Scratch Org 

To push the changes made in your local Salesforce project to the scratch org, use the following command. 

```
sfdx project:deploy:start -o <scratch org use name> 
```

Replace <scratch org username> with the username of your scratch org.

![Salesforce Push Scratch](images/Salesforce-push-scratch.png)

### Creating Lightning Page 

To display the EJ2 Scheduler on a Lightning page, follow these steps. 

1. In your scratch org, search for Lightning App Builder in the quick find setup, select Lightning App Builder and click New. 

![Search Scheduler page](images/Salesforce-create-lightning-page.png)

2. Choose App Page and click Next. 

![Search Scheduler page](images/Salesforce-add-lightning-page.png)

3. Provide a label name for the app page and click Next. For example, here you can name it SyncfusionScheduler. 

![Search Scheduler page](images/Salesforce-provide-name-lightning-page.png)

4. Choose One Region and click Finish. 

![Search Scheduler page](images/Salesforce-select-region-lightning-page.png)

5. In the Lightning App Builder, under the Add Components Here section, drag and drop the scheduler component. The scheduler will be 
rendered inside the content body. Click Save to activate the custom component. 

![Search Scheduler page](images/Salesforce-add-component.png)

![Search Scheduler page](images/Salesforce-save-component.png)

6. Activate the custom component with name SyncfusionScheduler and click the Save. 

![Search Scheduler page](images/Salesforce-activate-custom-component.png)

### Launching Scheduler in Home page 

To access the integrated EJ2 Scheduler on the home page, follow these steps. 

1. Click on the app launcher icon in Salesforce. 
2. Search for SyncfusionScheduler, which was registered earlier in the Lightning App Builder.

![Search Scheduler page](images/Salesforce-search-scheduler.png)

3. Click on the SyncfusionScheduler app, and the scheduler will load on the home page.

![Click Scheduler page](images/Salesforce-click-scheduler.png)

### GitHub Reference 

You can check out the complete working example of this EJ2 Scheduler integration into salesforce on this GitHub repository as follows: https://github.com/SyncfusionExamples/salesforce-integration-in-ej2-javascript-scheduler 

### Summary 

This blog has provided a detailed step-by-step guide on how to configure Salesforce, create a Salesforce project, authorize it, add static resources, create a Lightning web component, and display the scheduler on a Lightning page. By following these instructions, you can integrate the EJ2 Scheduler to efficiently manage your events and appointments within Salesforce. 

The Scheduler component is also available in our [Angular](https://www.syncfusion.com/angular-components/angular-scheduler), [React](https://www.syncfusion.com/react-components/react-scheduler), [Vue](https://www.syncfusion.com/vue-components/vue-scheduler), [JavaScript](https://www.syncfusion.com/javascript-ui-controls/js-scheduler), ASP.NET ([Core](https://www.syncfusion.com/aspnet-core-ui-controls/scheduler) and [MVC](https://www.syncfusion.com/aspnet-mvc-ui-controls/scheduler)), and [Blazor](https://www.syncfusion.com/blazor-components/blazor-scheduler) platforms. Try it out in your platform of choice and enjoy hassle-free slide navigation! 

As always, you can contact us through our [support forums](https://www.syncfusion.com/forums), [support portal](https://support.syncfusion.com/), or [feedback portal](https://www.syncfusion.com/feedback/). We are always happy to assist you!

> You can refer to our [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/material/schedule/overview.html) to knows how to present and manipulate data.
