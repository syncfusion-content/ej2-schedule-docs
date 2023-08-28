---
layout: post
title: Cell customization in ##Platform_Name## Schedule control | Syncfusion
description: Learn here all about Cell customization in Syncfusion ##Platform_Name## Schedule control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Cell customization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Cell customization in ##Platform_Name## Schedule control

The cells of the Scheduler can be easily customized either using the cell template or `renderCell` event.

## Setting cell dimensions in all views

The height and width of the Scheduler cells can be customized either to increase or reduce its size through the `cssClass` property, which overrides the default CSS applied on cells.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/cell-dimension-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/cell-dimension-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/cell-dimension-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/cell-dimension-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs2" %}
{% endif %}

## Check for cell availability

You can check whether the given time range slots are available for event creation or already occupied by other events using the `isSlotAvailable` method. In the following code example, if a specific time slot already contains an appointment, then no more appointments can be added to that cell.

>Note: The existing **isSlotAvailable** method currently focuses on validating appointments within the current view date range. However, it does not extend this availability check to recurrence occurrences outside of the current date range.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/cell-dimension-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/cell-dimension-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/cell-dimension-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/cell-dimension-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs3" %}
{% endif %}

## Customizing cells in all the views

It is possible to customize the appearance of the cells using both template options and `renderCell` event on all the views.

### Using template

The `cellTemplate` option accepts the template string and is used to customize the cell background with specific images or appropriate text on the given date values.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/cell-dimension-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/cell-dimension-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/cell-dimension-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/cell-dimension-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs4" %}
{% endif %}

### Using renderCell event

An alternative to `cellTemplate` is the `renderCell` event, which can also be used to customize the cells with appropriate images or formatted text values.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/cell-dimension-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/cell-dimension-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/cell-dimension-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/cell-dimension-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs5" %}
{% endif %}

You can customize cells such as work cells, month cells, all-day cells, header cells, resource header cells using `renderCell` event by checking the `elementType` option within the event. You can check elementType with any of the following.

| Element type | Description |
|-------|---------|
| dateHeader | triggers on header cell rendering.|
| monthDay | triggers on header cell in month view rendering.|
| resourceHeader | triggers on resource header cell rendering.|
| alldayCells | triggers on all day cell rendering.|
| emptyCells | triggers on empty cell rendering on header bar.|
| resourceGroupCells | triggers on rendering of work cells for parent resource.|
| workCells | triggers on work cell rendering.|
| monthCells | triggers on month cell rendering.|
| majorSlot | triggers on major time slot cell rendering.|
| minorSlot | triggers on minor time slot cell rendering.|
| weekNumberCell | triggers on cell displaying week number.|

## Customizing cell header in month view

The month header of each date cell in the month view can be customized using the `cellHeaderTemplate` option which accepts the string or HTMLElement. The corresponding date can be accessed with the template.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/cell-dimension-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/cell-dimension-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/cell-dimension-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/cell-dimension-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs6" %}
{% endif %}

## Customizing the minimum and maximum date values

Providing the `minDate` and `maxDate` property with some date values, allows the Scheduler to set the minimum and maximum date range. The Scheduler date that lies beyond this minimum and maximum date range will be in a disabled state so that the date navigation will be blocked beyond the specified date range.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/cell-dimension-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/cell-dimension-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/cell-dimension-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/cell-dimension-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs7" %}
{% endif %}

>By default, the `minDate` property value is set to new Date(1900, 0, 1) and `maxDate` property value is set to new Date(2099, 11, 31). The user can also set the customized `minDate` and `maxDate` property values.

## How to disable multiple cell and row selection in Schedule

By default, the `allowMultiCellSelection` and `allowMultiRowSelection` properties of the Schedule are set to `true`. So, the Schedule allows user to select multiple cells and rows. If the user want to disable this multiple cell and row selection. The user can disable this feature by setting up `false` to these properties.

> You can refer to our [JavaScript Scheduler](https://www.syncfusion.com/javascript-ui-controls/js-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript Scheduler example](https://ej2.syncfusion.com/demos/#/material/schedule/overview.html) to knows how to present and manipulate data.
