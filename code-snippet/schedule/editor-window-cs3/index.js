function minValidation(args) {
    return args['value'].length >= 5;
};
var scheduleObj = new ej.schedule.Schedule({
    width: '100%', height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: {
        dataSource: scheduleData,
        fields: {
            id: 'Id',
            subject: { name: 'Subject', validation: { required: true } },
            location: { name: 'Location', validation: { required: true } },
            description: {
                name: 'Description', validation: {
                    required: true, minLength: [minValidation, 'Need atleast 5 letters to be entered']
                }
            },
            startTime: { name: 'StartTime', validation: { required: true } },
            endTime: { name: 'EndTime', validation: { required: true } }
        }
    }
});
scheduleObj.appendTo('#Schedule');

