---
layout: post
title: Manual refresh in ##Platform_Name## Schedule control | Syncfusion
description: Learn here all about Manual refresh in Syncfusion ##Platform_Name## Schedule control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Manual refresh 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Manual refresh in ##Platform_Name## Schedule control

In Scheduler, we can able to refresh the layout manually without re-render the DOM element by using the [`refreshLayout`](../../api/schedule/#refreshlayout) public method.  The following example code explains to know how to use the refreshLayout method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/schedule/refresh-layout-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/refresh-layout-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/refresh-layout-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/schedule/refresh-layout-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/refresh-layout-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/refresh-layout-cs1" %}
{% endif %}
