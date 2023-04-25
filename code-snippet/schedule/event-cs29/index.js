var data = [{
        Id: 13,
        Subject: 'Myths of Andromeda Galaxy',
        StartTime: new Date(2018, 1, 16, 10, 30),
        EndTime: new Date(2018, 1, 16, 10, 40)
    }, {
        Id: 14,
        Subject: 'Aliens vs Humans',
        StartTime: new Date(2018, 1, 15, 10, 0),
        EndTime: new Date(2018, 1, 15, 10, 20)
    }];
var scheduleObj = new ej.schedule.Schedule({
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: data },
    eventRendered: function(args) {
        var cellHeight = (scheduleObj.element.querySelector('.e-work-cells')).offsetHeight;
        let appHeight = (args.data.EndTime.getTime() - args.data.StartTime.getTime()) / (60 * 1000) * (cellHeight * scheduleObj.timeScale.slotCount) / scheduleObj.timeScale.interval;
        args.element.style.height = appHeight+'px';
    }
});
scheduleObj.appendTo('#Schedule');

