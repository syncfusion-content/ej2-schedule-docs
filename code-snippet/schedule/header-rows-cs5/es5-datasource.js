var scheduleData = [
    {
        Id: 1,
        Subject: 'Explosion of Betelgeuse Star',
        StartTime: new Date(2019, 0, 1, 9, 30),
        EndTime: new Date(2019, 0, 1, 11, 0),
        CategoryColor: '#1aaa55'
    }, {
        Id: 2,
        Subject: 'Thule Air Crash Report',
        StartTime: new Date(2019, 0, 2, 12, 0),
        EndTime: new Date(2019, 0, 2, 14, 0),
        CategoryColor: '#357cd2'
    }, {
        Id: 3,
        Subject: 'Blue Moon Eclipse',
        StartTime: new Date(2019, 0, 3, 9, 30),
        EndTime: new Date(2019, 0, 3, 11, 0),
        CategoryColor: '#7fa900'
    }, {
        Id: 4,
        Subject: 'Meteor Showers in 2018',
        StartTime: new Date(2019, 0, 1, 13, 0),
        EndTime: new Date(2019, 0, 1, 14, 30),
        CategoryColor: '#ea7a57'
    }, {
        Id: 5,
        Subject: 'Milky Way as Melting pot',
        StartTime: new Date(2018, 11, 31, 12, 0),
        EndTime: new Date(2018, 11, 31, 14, 0),
        CategoryColor: '#00bdae'
    }, {
        Id: 6,
        Subject: 'Mysteries of Bermuda Triangle',
        StartTime: new Date(2018, 11, 31, 9, 30),
        EndTime: new Date(2018, 11, 31, 11, 0),
        CategoryColor: '#f57f17'
    }, {
        Id: 7,
        Subject: 'Glaciers and Snowflakes',
        StartTime: new Date(2018, 11, 26, 11, 0),
        EndTime: new Date(2018, 11, 26, 12, 30),
        CategoryColor: '#1aaa55'
    }, {
        Id: 8,
        Subject: 'Life on Mars',
        StartTime: new Date(2018, 11, 25, 9, 0),
        EndTime: new Date(2018, 11, 25, 10, 0),
        CategoryColor: '#357cd2'
    }, {
        Id: 9,
        Subject: 'Alien Civilization',
        StartTime: new Date(2018, 11, 27, 11, 0),
        EndTime: new Date(2018, 11, 27, 13, 0),
        CategoryColor: '#7fa900'
    }, {
        Id: 10,
        Subject: 'Wildlife Galleries',
        StartTime: new Date(2018, 11, 29, 11, 0),
        EndTime: new Date(2018, 11, 29, 13, 0),
        CategoryColor: '#ea7a57'
    }, {
        Id: 11,
        Subject: 'Best Photography 2018',
        StartTime: new Date(2018, 11, 30, 9, 30),
        EndTime: new Date(2018, 11, 30, 11, 0),
        CategoryColor: '#00bdae'
    }, {
        Id: 12,
        Subject: 'Smarter Puppies',
        StartTime: new Date(2018, 11, 29, 10, 0),
        EndTime: new Date(2018, 11, 29, 11, 30),
        CategoryColor: '#f57f17'
    }, {
        Id: 13,
        Subject: 'Myths of Andromeda Galaxy',
        StartTime: new Date(2018, 11, 28, 10, 30),
        EndTime: new Date(2018, 11, 28, 12, 30),
        CategoryColor: '#1aaa55'
    }, {
        Id: 14,
        Subject: 'Aliens vs Humans',
        StartTime: new Date(2018, 0, 5, 10, 0),
        EndTime: new Date(2018, 0, 5, 11, 30),
        CategoryColor: '#357cd2'
    }, {
        Id: 15,
        Subject: 'Facts of Humming Birds',
        StartTime: new Date(2018, 0, 10, 9, 30),
        EndTime: new Date(2018, 0, 10, 11, 0),
        CategoryColor: '#7fa900'
    }, {
        Id: 16,
        Subject: 'Sky Gazers',
        StartTime: new Date(2018, 11, 23, 11, 0),
        EndTime: new Date(2018, 11, 23, 13, 0),
        CategoryColor: '#ea7a57'
    }, {
        Id: 17,
        Subject: 'The Cycle of Seasons',
        StartTime: new Date(2018, 0, 2, 5, 30),
        EndTime: new Date(2018, 0, 2, 7, 30),
        CategoryColor: '#00bdae'
    }, {
        Id: 18,
        Subject: 'Space Galaxies and Planets',
        StartTime: new Date(2018, 0, 4, 17, 0),
        EndTime: new Date(2018, 0, 4, 18, 30),
        CategoryColor: '#f57f17'
    }, {
        Id: 19,
        Subject: 'Lifecycle of Bumblebee',
        StartTime: new Date(2018, 11, 31, 6, 0),
        EndTime: new Date(2018, 11, 31, 7, 30),
        CategoryColor: '#7fa900'
    }, {
        Id: 20,
        Subject: 'Sky Gazers',
        StartTime: new Date(2018, 11, 31, 16, 0),
        EndTime: new Date(2018, 11, 31, 18, 0),
        CategoryColor: '#ea7a57'
    }
];

var eventData = [
    {
        Id: 1,
        Subject: 'Explosion of Betelgeuse Star',
        StartTime: new Date(2018, 5, 11, 9, 30),
        EndTime: new Date(2018, 5, 11, 11, 0),
        CategoryColor: '#1aaa55'
    }, {
        Id: 2,
        Subject: 'Thule Air Crash Report',
        StartTime: new Date(2018, 6, 2, 12, 0),
        EndTime: new Date(2018, 6, 2, 14, 0),
        CategoryColor: '#357cd2'
    }, {
        Id: 3,
        Subject: 'Blue Moon Eclipse',
        StartTime: new Date(2018, 2, 13, 9, 30),
        EndTime: new Date(2018, 2, 13, 11, 0),
        CategoryColor: '#7fa900'
    }, {
        Id: 4,
        Subject: 'Meteor Showers in 2018',
        StartTime: new Date(2018, 1, 14, 13, 0),
        EndTime: new Date(2018, 1, 14, 14, 30),
        CategoryColor: '#ea7a57'
    }, {
        Id: 5,
        Subject: 'Milky Way as Melting pot',
        StartTime: new Date(2018, 0, 7, 12, 0),
        EndTime: new Date(2018, 0, 7, 14, 0),
        CategoryColor: '#00bdae'
    }, {
        Id: 6,
        Subject: 'Mysteries of Bermuda Triangle',
        StartTime: new Date(2018, 0, 5, 9, 30),
        EndTime: new Date(2018, 0, 5, 11, 0),
        CategoryColor: '#f57f17'
    }, {
        Id: 7,
        Subject: 'Glaciers and Snowflakes',
        StartTime: new Date(2018, 2, 16, 11, 0),
        EndTime: new Date(2018, 2, 16, 12, 30),
        CategoryColor: '#1aaa55'
    }, {
        Id: 8,
        Subject: 'Life on Mars',
        StartTime: new Date(2018, 1, 17, 9, 0),
        EndTime: new Date(2018, 1, 17, 10, 0),
        CategoryColor: '#357cd2'
    }, {
        Id: 9,
        Subject: 'Alien Civilization',
        StartTime: new Date(2018, 1, 19, 11, 0),
        EndTime: new Date(2018, 1, 19, 13, 0),
        CategoryColor: '#7fa900'
    }, {
        Id: 10,
        Subject: 'Wildlife Galleries',
        StartTime: new Date(2018, 3, 21, 11, 0),
        EndTime: new Date(2018, 3, 21, 13, 0),
        CategoryColor: '#ea7a57'
    }, {
        Id: 11,
        Subject: 'Best Photography 2018',
        StartTime: new Date(2018, 4, 22, 9, 30),
        EndTime: new Date(2018, 4, 22, 11, 0),
        CategoryColor: '#00bdae'
    }, {
        Id: 12,
        Subject: 'Smarter Puppies',
        StartTime: new Date(2017, 11, 9, 10, 0),
        EndTime: new Date(2017, 11, 9, 11, 30),
        CategoryColor: '#f57f17'
    }, {
        Id: 13,
        Subject: 'Myths of Andromeda Galaxy',
        StartTime: new Date(2017, 11, 7, 10, 30),
        EndTime: new Date(2017, 11, 7, 12, 30),
        CategoryColor: '#1aaa55'
    }, {
        Id: 14,
        Subject: 'Aliens vs Humans',
        StartTime: new Date(2018, 1, 5, 10, 0),
        EndTime: new Date(2018, 1, 5, 11, 30),
        CategoryColor: '#357cd2'
    }, {
        Id: 15,
        Subject: 'Facts of Humming Birds',
        StartTime: new Date(2018, 1, 20, 9, 30),
        EndTime: new Date(2018, 1, 20, 11, 0),
        CategoryColor: '#7fa900'
    }, {
        Id: 16,
        Subject: 'Sky Gazers',
        StartTime: new Date(2018, 2, 2, 11, 0),
        EndTime: new Date(2018, 2, 2, 13, 0),
        CategoryColor: '#ea7a57'
    }, {
        Id: 17,
        Subject: 'The Cycle of Seasons',
        StartTime: new Date(2018, 1, 2, 5, 30),
        EndTime: new Date(2018, 1, 2, 7, 30),
        CategoryColor: '#00bdae'
    }, {
        Id: 18,
        Subject: 'Space Galaxies and Planets',
        StartTime: new Date(2018, 1, 3, 17, 0),
        EndTime: new Date(2018, 1, 3, 18, 30),
        CategoryColor: '#f57f17'
    }, {
        Id: 19,
        Subject: 'Lifecycle of Bumblebee',
        StartTime: new Date(2018, 0, 3, 6, 0),
        EndTime: new Date(2018, 0, 3, 7, 30),
        CategoryColor: '#7fa900'
    }, {
        Id: 20,
        Subject: 'Sky Gazers',
        StartTime: new Date(2018, 0, 2, 16, 0),
        EndTime: new Date(2018, 0, 2, 18, 0),
        CategoryColor: '#ea7a57'
    }
];

var resourceData = [
    {
        Id: 1,
        Subject: 'Family vacation',
        StartTime: new Date(2018, 3, 1, 9, 30),
        EndTime: new Date(2018, 3, 1, 12, 0),
        IsAllDay: false,
        Location: 'London',
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 2,
        Subject: 'Holiday',
        StartTime: new Date(2018, 3, 1, 12, 30),
        EndTime: new Date(2018, 3, 1, 14, 45),
        IsAllDay: false,
        Location: 'USA',
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 3,
        Subject: 'Conference',
        StartTime: new Date(2018, 3, 2, 10, 0),
        EndTime: new Date(2018, 3, 2, 12, 30),
        IsAllDay: false,
        Location: 'Paris',
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 4,
        Subject: 'Weekend trip',
        StartTime: new Date(2018, 3, 2, 13, 0),
        EndTime: new Date(2018, 3, 2, 15, 30),
        IsAllDay: false,
        Location: 'Spain',
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 5,
        Subject: 'Weekend trip',
        StartTime: new Date(2018, 3, 3, 9, 0),
        EndTime: new Date(2018, 3, 3, 11, 30),
        IsAllDay: false,
        Location: 'Paris',
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 6,
        Subject: 'Holiday trip',
        StartTime: new Date(2018, 3, 3, 14, 0),
        EndTime: new Date(2018, 3, 3, 16, 45),
        IsAllDay: false,
        Location: 'Thailand',
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 7,
        Subject: 'World cup',
        StartTime: new Date(2018, 3, 4, 11, 15),
        EndTime: new Date(2018, 3, 4, 13, 30),
        IsAllDay: false,
        Location: 'Brazil',
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 8,
        Subject: 'Test match',
        StartTime: new Date(2018, 3, 4, 9, 15),
        EndTime: new Date(2018, 3, 4, 11, 45),
        IsAllDay: false,
        Location: 'West indies',
        OwnerId: 2,
        RoomId: 2
    }, {
        Id: 9,
        Subject: 'One-day match',
        StartTime: new Date(2018, 3, 5, 9, 30),
        EndTime: new Date(2018, 3, 5, 12, 45),
        IsAllDay: false,
        Location: 'India',
        OwnerId: 1,
        RoomId: 1
    }, {
        Id: 10,
        Subject: 'Test drive',
        StartTime: new Date(2018, 3, 5, 13, 45),
        EndTime: new Date(2018, 3, 5, 16, 30),
        IsAllDay: false,
        Location: 'London',
        OwnerId: 2,
        RoomId: 1
    }
];
