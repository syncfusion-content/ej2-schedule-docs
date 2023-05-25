---
layout: post
title: Context menu in ##Platform_Name## Schedule control | Syncfusion
description: Learn here all about Context menu in Syncfusion ##Platform_Name## Schedule control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Context menu 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Context menu in ##Platform_Name## Schedule control

You can display context menu on work cells and appointments of Scheduler by making use of the `ContextMenu` control manually from the application end. In the following code example, context menu control is being added from sample end and set its target as `Scheduler`.

On Scheduler cells, you can display the menu items such as `New Event`, `New Recurring Event` and `Today` option. For appointments, you can display its related options such as `Edit Event` and `Delete Event`. The default event window can be opened for appointment creation and editing using the `openEditor` method of Scheduler.

The deletion of appointments can be done by using the `deleteEvent` public method. Also, the `selectedDate` property can be used to navigate between different dates.

> You can also display custom menu options on Scheduler cells and appointments. Context menu will open on tap-hold in responsive mode.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/context-menu-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/context-menu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/context-menu-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/context-menu-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/context-menu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/context-menu-cs1" %}
{% endif %}

> You can refer to our [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/material/schedule/overview.html) to knows how to present and manipulate data.
