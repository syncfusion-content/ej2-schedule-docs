var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    group: {
        byDate: true,
        hideNonWorkingDays: true,
        resources: ['Owners']
    },
    resources: [{
        field: 'OwnerId', title: 'Owner',
        name: 'Owners', allowMultiple: true,
        dataSource: [
            { text: 'Alice', id: 1, color: '#1aaa55', workDays: [1, 2, 3, 4] },
            { text: 'Smith', id: 2, color: '#7fa900', workDays: [2, 3, 5] }
        ],
        textField: 'text', idField: 'id', colorField: 'color', workDaysField: 'workDays'
    }],
});
scheduleObj.appendTo('#Schedule');

