---
layout: post
title: Virtual scrolling in ##Platform_Name## Schedule control | Syncfusion
description: Learn here all about Virtual scrolling in Syncfusion ##Platform_Name## Schedule control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Virtual scrolling 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Virtual scrolling in ##Platform_Name## Schedule control

To achieve better performance in the Scheduler when loading a large number of resources and events, we have added virtual scrolling support to load a large set of resources and events instantly as you scroll. You can dynamically load large number of resources and events in the Scheduler by setting `true` to the [`allowVirtualScrolling`](../api/schedule/viewsModel/#allowvirtualscrolling) property within the view specific settings. The virtual loading of events is possible in Agenda view, by setting [`allowVirtualScrolling`](../api/schedule/viewsModel/#allowvirtualscrolling) property to `true` within the agenda view specific settings.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/virtual-scrolling-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/virtual-scrolling-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/virtual-scrolling-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/virtual-scrolling-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/virtual-scrolling-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/virtual-scrolling-cs1" %}
{% endif %}

**Note:** For now, the virtual loading of resources and events is not supported in `MonthAgenda`, `Year` and `TimelineYear` (Horizontal Orientation) views.

> You can refer to our [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/material/schedule/overview.html) to knows how to present and manipulate data.

## See Also

* [Virtual scrolling in Agenda view](./views/#agenda-view)