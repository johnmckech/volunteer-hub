const { Volunteers } = require('../models');

const volunteerData = [
    {
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'janedoe@fakeemail.com',
        langauges: 'English',
        techKnowledge: 'Facebook',
        specialKnowledge: 'Web Development',
        hoursPerWeek: '10',

    },
    {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@fakeemail.com',
        langauges: 'English',
        techKnowledge: 'Microsoft Word',
        specialKnowledge: 'Grant Writing',
        hoursPerWeek: '',
    },
    {
        first_name: 'Mary',
        last_name: 'Poppins',
        email: 'upandup@fakeemail.com',
        langauges: 'English',
        techKnowledge: 'Microsoft Word',
        specialKnowledge: 'Grant Writing',
        hoursPerWeek: '10',
    },
];

const seedVolunteers = () => Volunteers.bulkCreate(volunteerData, { individualHooks: true, returning: true });

module.exports = seedVolunteers;