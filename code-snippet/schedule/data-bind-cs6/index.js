var dataManager = new ej.data.DataManager({
    url: 'http://some.com/invalidUrl'
});
var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2017, 5, 11),
    eventSettings: { dataSource: dataManager },
    actionFailure: function() {
       var span = document.createElement('span');
       scheduleObj.element.parentNode.insertBefore(span, scheduleObj.element);
       span.style.color = '#FF0000'
       span.innerHTML = 'Server exception: 404 Not found';
    }
});
scheduleObj.appendTo('#Schedule');

