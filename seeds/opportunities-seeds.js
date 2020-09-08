const { Opportunities } = require('../models');

const opportunityData = [
    {
        opportunityName: 'Reviewing and editing research manuscript',
        languages: 'English',
        techKnowledge: 'Microsoft Word',
        specialKnowledge: 'Grant Writing',
        hoursPerWeek: '5',
    },
    {
        opportunityName: 'Create website for technology summit',
        languages: 'English',
        techKnowledge: 'Facebook',
        specialKnowledge: 'Web Development',
        hoursPerWeek: '10',
    },
];

const seedOpportunities = () => Opportunities.bulkCreate(opportunityData);

module.exports = seedOpportunities;
