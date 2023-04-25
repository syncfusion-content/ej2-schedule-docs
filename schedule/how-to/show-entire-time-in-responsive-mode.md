---
layout: post
title: Show entire time in responsive mode in ##Platform_Name## Schedule control | Syncfusion
description: Learn here all about Show entire time in responsive mode in Syncfusion ##Platform_Name## Schedule control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Show entire time in responsive mode 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Show entire time in responsive mode in ##Platform_Name## Schedule control

9 AM is visible since it has enough space in responsive mode, but if you set 08:45 AM as start hour of scheduler then the time slots will not show full time in the time slot of responsive scheduler, for which we can use `majorSlotTemplate` to set proper time slots in scheduler.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/timescale-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/timescale-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/timescale-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/timescale-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/timescale-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/timescale-cs1" %}
{% endif %}