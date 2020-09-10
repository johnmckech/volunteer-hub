const seedVolunteers = require('./volunteers-seeds');
const seedOpportunities = require('./opportunities-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');

    await seedVolunteers();
    console.log('--------------');
  
    await seedOpportunities();
    console.log('--------------');

    process.exit(0);
};

seedAll();

