---
layout: post
title: Set different work hours in ##Platform_Name## Schedule control | Syncfusion
description: Learn here all about Set different work hours in Syncfusion ##Platform_Name## Schedule control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Set different work hours 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Set different work hours in ##Platform_Name## Schedule control

By default, the work hours of the Scheduler is highlighted based on the start and end values provided within the `workHours` property which remains same for all days. To highlight different work hours range for different days,`setWorkHours` method. You can pass date object/ multiple date objects collection as first argument and start and end time need to be added as work hours should be passed as second and third arguments respectively. In the following code example, on button click 11:00 AM to 08:00 PM of 15th and 17th February has been added in work hours.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/open-editor-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/open-editor-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/open-editor-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/open-editor-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/open-editor-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/open-editor-cs2" %}
{% endif %}