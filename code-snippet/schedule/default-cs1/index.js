var scheduleObj = new ej.schedule.Schedule({
    width: '100%',
    height: '550px',
    selectedDate: new Date(2018, 1, 15),
    eventSettings: { dataSource: scheduleData , 
        fields: {
            subject: { name: 'Subject', validation: { required: true } },
            location: {
                name: 'Location', validation: {
                    required: true,
                    regex: ["^[a-zA-Z0-9- ]*$", 'Special character(s) not allowed in this field']
                }
            }
        }
     }
});
scheduleObj.appendTo('#Schedule');


