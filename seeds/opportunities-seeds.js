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
    {
        opportunityName: 'Provide closed captioning for webinar',
        languages: 'French',
        techKnowledge: 'Microsoft Word',
        specialKnowledge: '',
        hoursPerWeek: '5',
    },
    {
        opportunityName: 'Create website for small non-profit',
        languages: 'English',
        techKnowledge: '',
        specialKnowledge: 'Web Development',
        hoursPerWeek: '10',
    },
    {
        opportunityName: 'Create social media for upcoming event',
        languages: 'English',
        techKnowledge: 'Facebook',
        specialKnowledge: '',
        hoursPerWeek: '5',
    },
    {
        opportunityName: 'Create web game to help people learn Chinese',
        languages: 'Chinese',
        techKnowledge: 'Facebook',
        specialKnowledge: 'Web Development',
        hoursPerWeek: '20',
    },
];

const seedOpportunities = () => Opportunities.bulkCreate(opportunityData, { individualHooks: true, returning: true });

module.exports = seedOpportunities;
